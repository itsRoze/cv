import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { RESUME } from "@/data/resume";

export default function Page() {
  return (
    <main>
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <Heading />
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME.summary}
          </p>
        </Section>
        <School />
        <Work />
        <Projects />
      </section>

      <CommandMenu
        links={[
          {
            url: "/",
            title: "CV",
            targetSelf: true,
          },
          {
            url: "/posts",
            title: "Posts",
            targetSelf: true,
          },
          ...RESUME.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}

const Heading = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">{RESUME.name}</h1>
        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
          {RESUME.about}
        </p>
        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
          <a
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={RESUME.locationLink}
            target="_blank"
          >
            <GlobeIcon className="size-3" />
            {RESUME.location}
          </a>
        </p>
        <div className="flex gap-x-4 pt-1 font-mono text-sm text-muted-foreground print:hidden">
          {RESUME.contact.email ? (
            <a
              href={`mailto:${RESUME.contact.email}`}
              className="transform duration-100 hover:-translate-y-1 hover:rotate-12"
            >
              <MailIcon className="size-6" />
            </a>
          ) : null}
          {RESUME.contact.social.map((social) => (
            <a
              key={social.name}
              target="_blank"
              href={social.url}
              className="transform duration-100 hover:-translate-y-1 hover:rotate-12"
            >
              <social.icon className="size-6" />
            </a>
          ))}
        </div>
        <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
          {RESUME.contact.email ? (
            <a href={`mailto:${RESUME.contact.email}`}>
              <span className="underline">{RESUME.contact.email}</span>
            </a>
          ) : null}
        </div>
      </div>
      <Avatar className="size-28">
        <AvatarImage alt={RESUME.name} src={RESUME.avatarUrl} />
        <AvatarFallback>{RESUME.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
};

const School = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Education</h2>
      {RESUME.education.map((education) => {
        return (
          <Card key={education.school}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">
                  {education.school}
                </h3>
                <div className="text-xs tabular-nums text-gray-500">
                  {education.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2 print:text-[12px]">
              {education.degree}
            </CardContent>
          </Card>
        );
      })}
    </Section>
  );
};

const Work = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Work Experience</h2>
      {RESUME.work.map((work) => {
        return (
          <Card key={work.company}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a
                    className="hover:underline"
                    href={work.link}
                    target="_blank"
                  >
                    {work.company}
                  </a>

                  <span className="inline-flex gap-x-1">
                    {work.badges.map((badge) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                        key={badge}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                </h3>
                <div className="text-xs tabular-nums text-gray-500">
                  {work.start} - {work.end ?? "Present"}
                </div>
              </div>

              <h4 className="font-mono text-sm leading-none print:text-[12px]">
                {work.title}
              </h4>
            </CardHeader>
            <CardContent className="mt-2 text-sm print:text-[10px]">
              {work.description}
              <div className="flex flex-wrap gap-1 py-2">
                {work.skills.map((badge) => (
                  <Badge
                    variant={"secondary"}
                    className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                    key={badge}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </Section>
  );
};

const Projects = () => {
  return (
    <Section className="print-force-new-page scroll-mb-16">
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {RESUME.projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link : undefined}
            />
          );
        })}
      </div>
    </Section>
  );
};
