const validateInscEst = (insc) => {
    const inscEst = insc.toString();
    if (inscEst.length > 14 || inscEst.length < 8) {
        return false;
    }
    return true;
}
export default validateInscEst;