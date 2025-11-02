import fs from "fs";
import { Vonage } from "@vonage/server-sdk";
import dotenv from "dotenv";

dotenv.config();

const { NEXT_PUBLIC_VONAGE_APPLICATION_ID, VONAGE_PRIVATE_KEY_PATH } = process.env;

console.log("Path:", VONAGE_PRIVATE_KEY_PATH);
console.log("Exists:", fs.existsSync(VONAGE_PRIVATE_KEY_PATH));

const keyData = fs.readFileSync(VONAGE_PRIVATE_KEY_PATH);
console.log("Key length:", keyData.length);

const vonage = new Vonage({
  applicationId: NEXT_PUBLIC_VONAGE_APPLICATION_ID,
  privateKey: keyData,
});

(async () => {
  try {
    const session = await vonage.video.createSession();
    console.log("Session created ✅", session);
  } catch (err) {
    console.error("Error ❌", err);
  }
})();
