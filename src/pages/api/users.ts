import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../utils/connection";
import { ResponseFuncs } from "../../utils/types";
import CryptoJs from "crypto-js";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { User } = await connect(); // connect to database
      const user = await User.findOne({ username: req.body.username });

      if (!user) return res.status(401).json("Mal nombre de usuario");
      const userPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.CRYPTO_KEY
      ).toString(CryptoJs.enc.Utf8);

      if (userPassword !== req.body.password)
        return res.status(401).json("Mala contraseña");

      return res.status(200).json("acceso permitido");
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) return response(req, res);
  else return res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
