import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Loader, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'CA, USA',
      color: 'from-red-500 to-pink-500',
      delay: '0s'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'bikashmainali18@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      delay: '0.2s'
    },
    {
      icon: Phone,
      title: 'Call',
      value: '510-927-5844',
      color: 'from-green-500 to-emerald-500',
      delay: '0.4s'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
              Contact
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Let's create something amazing together! Feel free to reach out and let's discuss your next project.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: info.delay }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 group-hover:border-purple-500 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  <p className="text-blue-200 font-medium">{info.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101130.15699105864!2d-122.15171246075876!3d37.61822097898874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9431b601597d%3A0x70474dec26939c0!2sHayward%2C%20CA!5e0!3m2!1sen!2sus!4v1699146603927!5m2!1sen!2sus"
            className="w-full h-80 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl blur opacity-20"></div>
            <form onSubmit={handleSubmit} className="relative bg-slate-800 rounded-3xl p-10 border border-slate-700">
              <div className="text-center mb-8">
                <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
                <p className="text-blue-200">I'd love to hear from you!</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-slate-600 bg-slate-700 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-slate-600 bg-slate-700 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-8 space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-blue-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-600 bg-slate-700 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-6 h-6 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-6 h-6" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
