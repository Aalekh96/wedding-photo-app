const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const archiver = require('archiver');

const app = express();
const PORT = process.env.PORT || 3000;


const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
  console.log('✅ Created missing uploads/ folder');
}

// Multer config (same as before)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const guestName = req.body.guestName || 'Unknown';
    const uploadPath = path.join(__dirname, 'uploads', guestName);
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${timestamp}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// Static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Upload route
app.post('/upload', upload.array('photos'), (req, res) => {
  res.send('🎉 Photos uploaded successfully!');
});

// API to return gallery structure
app.get('/api/gallery', (req, res) => {
  const uploadDir = path.join(__dirname, 'uploads');
  const gallery = {};

  fs.readdirSync(uploadDir).forEach(guest => {
    const guestDir = path.join(uploadDir, guest);
    const files = fs.readdirSync(guestDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    gallery[guest] = files;
  });

  res.json(gallery);
});

// Download all photos as ZIP
app.get('/download-all', (req, res) => {
  const archive = archiver('zip', { zlib: { level: 9 } });

  res.attachment('wedding-photos.zip');
  archive.pipe(res);
  archive.directory(path.join(__dirname, 'uploads'), false);
  archive.finalize();
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
