"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-yellow-light py-16 lg:py-20">
      <div className="container-box">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-20 lg:gap-24 items-center px-8 lg:px-16 py-16 lg:py-20"
        >
          <div className="flex flex-col gap-8 lg:gap-12 items-center text-center max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-semibold text-yellow-darkest">
              Ready to join us?
            </h2>
            <p className="text-xl lg:text-2xl font-medium text-yellow-dark leading-relaxed">
              Every great journey begins with a single step. Take yours today
              and become part of our growing scout family where adventures await
              and friendships last a lifetime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-20 items-center justify-center w-full">
            <Button className="whitespace-nowrap">Register for events</Button>
            <Link
              href="/about-us"
              className="border-2 border-yellow-darkest text-yellow-darkest px-7.5 py-2.5 rounded-[10px] font-medium text-lg hover:bg-yellow-darkest hover:text-white transition-colors duration-300 whitespace-nowrap text-center"
            >
              Learn more about us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
