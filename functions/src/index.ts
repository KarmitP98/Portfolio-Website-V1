import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

/**
 * Here we're using Gmail to send
 */
const transporter = nodemailer
    .createTransport( {
                        service: 'gmail',
                        auth: {
                          user: 'karmit199@gmail.com',
                          pass: 'xtkpcvajdsbmxrzh',
                        },
                      } );
/**
 * Send email to my gmail account on new message created on the website.
 */
exports.sendEmail = functions.firestore
                             .document(`messages/{messageId}`)
                             .onWrite((change) => {
  const email = change.after.data()?.email;
  const name = change.after.data()?.name;
  const message = change.after.data()?.message;

  const emailData = {
    from: `${name} <${email}>`,
    to: 'karmit199@gmail.com',
    subject: `${email} ${name} is trying to reach out! `,
    html: `${message}`,
  };

  return transporter.sendMail( emailData, ( error ) => {
    if ( error ) {
      functions.logger.error(error);
    }
  } );
});
