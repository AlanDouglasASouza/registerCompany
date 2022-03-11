import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/')
    },
    filename: (req, file, cb) => {        
        const extensaoArquivo = file.originalname.split('.')[1];        
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');
        
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});

const upload = multer({ storage });

export const photo = () => {
    const p = upload.single('photo');
    return p;
}
