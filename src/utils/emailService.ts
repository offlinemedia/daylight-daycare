import emailjs from "emailjs-com";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<"success" | "quota" | "error"> {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        inquiry_type: data.inquiryType,
        message: data.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return "success";
  } catch (error: any) {
    if (
      error?.text?.toLowerCase().includes("quota") ||
      error?.text?.toLowerCase().includes("limit")
    ) {
      return "quota";
    }
    return "error";
  }
}

export function fallbackMailto(data: ContactFormData) {
  const subject = encodeURIComponent("Contact Form Submission");
  const body = encodeURIComponent(
    `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nType: ${data.inquiryType}\nMessage:\n${data.message}`
  );
  window.location.href = `mailto:offlinemedia79@gmail.com?subject=${subject}&body=${body}`;
}
