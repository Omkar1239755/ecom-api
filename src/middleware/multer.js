import multer from "multer";



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/'); // Ensure this path exists
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now(); // Safe, numeric timestamp
    const safeFilename = `${timestamp}-${file.originalname}`; // Concatenate timestamp and original filename
    cb(null, safeFilename);
  }
});

export const upload = multer({ storage: storage });

