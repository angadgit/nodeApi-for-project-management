// require("dotenv").config();
const express = require("express");
const app = express();

// require("./db/conn");

// const router = require("./routes/router");
// const funderApi = require("./routes/funderRouter");
// const receiptApi = require("./routes/recepitRouter");
// const companyProfileApi = require("./routes/companyProfileRouter");
// const fundTypeApi = require("./routes/fundTypeRouter");

// const cors = require("cors");
// const cookiParser = require("cookie-parser")


const PORT = process.env.PORT || '8009';

app.use(express.json());
// app.use(cookiParser());
// app.use(cors());
// app.use('/auth', router);
// app.use('/funder', funderApi);
// app.use('/receipt', receiptApi);
// app.use('/companyProfile', companyProfileApi);
// app.use('/fundType', fundTypeApi);

app.get("/", (req, res) => {
    res.status(201).json("server created")
});

app.listen(PORT, () => console.log(`server start at port no : ${PORT}`));