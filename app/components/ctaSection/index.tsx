import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../button/Button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const CtaSection: React.FC = () => {
  return (
    <section className="section md:p-20 p-4 bg-background-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-6 text-3xl"
          >
            Have an idea? <span className="gradient-text text-[#684DF4]">Let&apos;s make it real.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Whether you&apos;re a startup with a bold vision or an enterprise looking to innovate, our team is ready to
            transform your ideas into powerful digital experiences.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="flex items-center gap-6 mt-10 justify-center"
          >
            <Link href="/auth/enroll">
              <Button
                label="Get Started Now"
                width="w-fit"
                buttonStyle="custom"
                height="h-[45px]"
                labelSize="text-[15px] font-lg rounded-md"
                customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
                icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
                iconPosition="right"
              />
            </Link>
            <Link href="/contact">
              <Button
                label="Contact Us"
                width="w-fit"
                buttonStyle="custom"
                height="h-[45px]"
                labelSize="text-[15px] font-lg"
                customClasses="text-white hover:text-black hover:bg-white cursor-pointer border border-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
