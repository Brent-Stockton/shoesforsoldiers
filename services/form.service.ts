import axios from "axios";

export const sendEmail = async (data: any) => {
  try {
    const submitted = await axios.post("/api/sendEmail", {
      name: data.name,
      emailFrom: data.email,
      emailTo: data.partnerEmail,
      message: data.message,
      phone: data.phoneNumber,
    });
    return submitted.data;
  } catch (err: any) {
    throw Error(err?.message || "Something went wrong. Please try again.");
  }
};
