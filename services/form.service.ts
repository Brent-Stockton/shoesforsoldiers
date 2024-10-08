import emailjs from "emailjs-com";

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  if (!serviceID || !templateID || !userID) {
    throw new Error("EmailJS service not properly configured.");
  }

  const templateParams = {
    to_name: "Davis Realty Team",
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  };

  return emailjs.send(serviceID, templateID, templateParams, userID);
};
