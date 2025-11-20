import { mutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const testContactFormSubmission = mutation({
  args: {},
  handler: async (ctx) => {
    // Simulate a realistic contact form submission
    const testSubmission = {
      name: "John Doe (TEST)",
      email: "johndoe.test@example.com",
      subject: "TEST: Inquiry about PCB Design Services",
      message: "Hi Saiesh,\n\nI came across your portfolio and I'm really impressed with your work on the STM32 GPS tracker and the ESP32 smart switch projects.\n\nI'm working on a similar IoT project that requires a 4-layer PCB with high-speed design considerations. Would you be available for a consultation?\n\nLooking forward to hearing from you!\n\nBest regards,\nJohn",
    };

    // Insert into database (same as real form submission)
    const contactId = await ctx.db.insert("contacts", {
      ...testSubmission,
      status: "new",
    });

    // Trigger email notification (same as real form submission)
    await ctx.scheduler.runAfter(
      0,
      internal.sendEmails.sendContactNotification,
      testSubmission
    );

    return {
      success: true,
      message: "Test contact form submission created and email notification triggered",
      contactId,
      testData: testSubmission,
    };
  },
});
