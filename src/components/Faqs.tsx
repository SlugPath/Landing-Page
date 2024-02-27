import Image from "next/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-faqs.jpg";
import Link from "next/link";

const faqs = [
  [
    {
      question: "How many majors have Major Verification?",
      answer:
        "Unfortunately the process of adding verification data for each major is a manual process. Luckily we have built a crowdsourcing system where students can help contribute this valuable data and help more students verify their majors.",
    },

    {
      question: "How accurate is Major Verification?",
      answer:
        "Unfortunately given the complexities of Major Requirements for some majors, we cannot provide 100% accurate verification. The accuracy and issues are documented in the notes for the requirements for each major.",
    },
  ],
  [
    {
      question: "How do I learn how to use SlugPath?",
      answer: (
        <>
          We&apos;ve worked hard to ensure that SlugPath is as intuitive as
          possible, but we recognize that it can be difficult to get used to a
          new system. That why we&apos;ve created{" "}
          <Link
            target="_blank"
            href=""
            className="text-blue-400"
            rel="noopener noreferrer"
          >
            this demo video
          </Link>{" "}
          demonstrating all of our features.
        </>
      ),
    },
  ],
  [
    {
      question: "Can I help make SlugPath better?",
      answer:
        "You can! We would love your feedback through our red Feedback button, or through your help collecting Major Requirement data for each major. If you are a UCSC staff member please reach out to us at insertemail@slugpath.com about becoming an administrator.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
