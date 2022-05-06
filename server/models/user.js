
const { db } = require("../util/admin");

exports.user = async (req, res) => {
    const userRef = db.collection('users');
    try{
            userRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            
        }));
            console.log("Hello",data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};


