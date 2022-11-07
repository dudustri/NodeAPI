
export const showCodingCat =  (req, res) => {
    
    res.sendFile('CodingCat.jpeg', { root: './images/'});
    //res.send('Look this amazing API Dude!');

}