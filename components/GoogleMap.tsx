"use client";

export default function MapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.698344537254!2d-80.23843492374644!3d25.6627145131676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c7f942144105%3A0x1c693b2aa6688075!2s12521%20S%20Dixie%20Hwy%2C%20Pinecrest%2C%20FL%2033156%2C%20USA!5e0!3m2!1sen!2sus!4v1710876543921!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg"
    />
  );
} 