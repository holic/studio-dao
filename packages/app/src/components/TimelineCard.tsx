import { Event } from "../projects/types";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

type Props = {
  title: string;
  description: string;
  events: Event[];
};

export const TimelineCard = ({ title, description, events }: Props) => {
  return (
    <Container id="budget" className="space-y-12">
      <SectionHeading title={title} />
      <div className="max-w-prose mx-auto text-center">{description}</div>
      <div className="relative">
        <div className="px-12 pt-16 pb-0 sm:pb-4 w-xl mx-auto bg-zinc-800 rounded-xl border  border-zinc-400 min-w-sm">
          <ul className=" border-white border-dashed pt-2 text-sm sm:text-lg">
            {events.map((event, index) => {
              if (event.selected) {
                return (
                  <li
                    key={`event-${index}`}
                    className="border-l-2 border-yellow-500 border-dotted"
                  >
                    <div className="flex flex-start items-center h-16 sm:h-12 leading-none">
                      <div className="bg-yellow-500 w-2 h-2 flex items-center justify-center rounded-full -ml-[.3rem] mr-3 -mt-16 sm:-mt-10"></div>
                      <span className="-mt-16 sm:-mt-10 text-yellow-500">
                        {event.title}
                      </span>
                    </div>
                  </li>
                );
              } else if (index === events.length - 1) {
                return (
                  <li key={`event-${index}`}>
                    <div className="flex flex-start items-center h-16 sm:h-12 leading-none">
                      <div className="bg-zinc-800 border-white border w-2 h-2 flex items-center justify-center rounded-full -ml-[.2rem] mr-3 -mt-16 sm:-mt-10"></div>
                      <span className="-mt-16 sm:-mt-10">{event.title}</span>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    key={`event-${index}`}
                    className="border-l-2 border-white border-dotted"
                  >
                    <div className="flex flex-start items-center h-16 sm:h-12 leading-none">
                      <div className="bg-zinc-800 border-white border w-2 h-2 flex items-center justify-center rounded-full -ml-[.3rem] mr-3 -mt-16 sm:-mt-10"></div>
                      <span className="-mt-16 sm:-mt-10">{event.title}</span>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};
