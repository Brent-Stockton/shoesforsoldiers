import emailjs from "emailjs-com";

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const serviceID = "service_d9yq35b";
  const templateID = "template_hvg0rpq";
  const userID = "4noXVBrUk5ALs0qDI";

  console.log(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  );

  if (!serviceID || !templateID || !userID) {
    throw new Error("EmailJS service not properly configured.");
  }

  const templateParams = {
    to_name: "Shoes For Soldiers",
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  };

  return emailjs.send(serviceID, templateID, templateParams, userID);
};
