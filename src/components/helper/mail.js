import emailjs from "@emailjs/browser";

export const sendMyEmail = async ({ name, email, message }) => {
  const templateParams = {
    from_name: name,
    from_email: email,
    to_email: import.meta.env.VITE_EMAIL,
    message: message,
  };

  await emailjs.send(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_PUBLIC_KEY,
  );
};
