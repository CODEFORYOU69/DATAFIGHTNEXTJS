// pages/api/fighters/uploadPhoto.js
import { updateFighterPhoto } from "../../../helpers/api/fighter-repo";
import upload from "./uploadMiddleware";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const fighterId = req.query.fighterId;

    try {
      await new Promise((resolve, reject) => {
        upload.single("photo")(req, res, async (err) => {
          if (err) {
            reject(err);
          } else {
            await updateFighterPhoto(fighterId, req.file.path);
            resolve();
          }
        });
      });

      res.status(200).json({ message: "Photo uploaded successfully" });
    } catch (error) {
      console.error("Error while updating the image:", error);
      res.status(500).json({ message: "Error while updating the image" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
