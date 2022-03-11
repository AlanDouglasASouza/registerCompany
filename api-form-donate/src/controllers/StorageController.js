export const PhotoCompanies = async (req, res) => {
    const photoUpComp = await req.body.photoCom;  
    
    res.status(200).sendFile(__dirname.replace('src\\controllers', '') + photoUpComp);
}