import fs from 'fs';


export const signup = (req, res) => {
    try {
        const newUser = req.body;

        console.log(newUser)

        if (!newUser.email && !newUser.password) {
            res.status(400).send("Please enter email and password");
        }

        const data = fs.readFileSync("Data/user.json", 'utf8');

        const users = JSON.parse(data);

        if (users.length > 0) {
            const existingUser = users.find((user) => user.email === newUser.email);

            if (existingUser) {
                res.status(400).json({ error: "User already exist with given email." })
            }
        } else {
            users.push(newUser);

            fs.writeFileSync('Data/user.json', JSON.stringify(users));

            res.status(200).json({ message: "User is added" });
        }


    } catch (err) {
        res.status(500).send(err);
        console.log("Here is the error : ", err)
    }
}