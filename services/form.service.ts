import axios from "axios";

export const sendEmail = async (data: any) => {
  try {
    const submitted = await axios.post("/api/sendgrid", {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message,
    });
    return submitted.data;
  } catch (err: any) {
    throw Error(err?.message || "Something went wrong. Please try again.");
  }
};
