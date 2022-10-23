import { DateTime } from "luxon";
import { gql } from "urql";

import { useSnapshotSectionQuery } from "../../codegen/snapshot";
import { ButtonLink } from "../Button";
import { Container } from "../Container";
import { useIsMounted } from "../useIsMounted";

// TODO: convince snapshot to give us better field types (too many nullables)
gql`
  query SnapshotSection {
    proposals(
      where: { space_in: ["studiodao.eth"] }
      orderBy: "created"
      orderDirection: desc
      first: 1
    ) {
      id
      title
      body
      choices
      scores
      scores_total
      votes
      start
      end
      snapshot
      state
      author
      link
      space {
        id
        name
      }
    }
  }
`;

export const SnapshotSection = () => {
  const isMounted = useIsMounted();

  const [queryResult] = useSnapshotSectionQuery();
  const currentProposal = queryResult.data?.proposals?.[0];

  // hydration breaks in this component, so skip SSR for now
  if (!isMounted) return null;

  if (!currentProposal) {
    return null;
  }

  console.log("currentProposal", currentProposal);
  const canVote =
    currentProposal.state === "active" &&
    currentProposal.end * 1000 > Date.now();

  return (
    <Container>
      <div className="flex flex-col sm:flex-row bg-black/20 rounded-3xl divide-x divide-zinc-800 py-4 md:py-8 -my-8">
        <div className="sm:w-6/12 px-8 md:px-12 py-4 flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-3xl font-dmserif text-white">
            Today’s Green-light vote
          </h2>
          <p className="max-w-prose mx-auto">
            Current active proposals. Your Green-light power allows you to vote
            daily to allocate funds to a film.{" "}
            <a
              href="#"
              className="text-emerald-500 hover:underline hover:underline-offset-2"
            >
              Learn more &rarr;
            </a>
          </p>
        </div>
        <div className="sm:w-6/12 px-8 md:px-12 py-4 flex flex-col gap-4">
          <p className="text-center text-zinc-500">
            {canVote ? (
              <>
                Voting ends in{" "}
                {DateTime.fromSeconds(currentProposal.end).toRelative()}.
              </>
            ) : (
              <>Stay tuned for the next vote!</>
            )}
          </p>
          <div className="flex flex-col gap-1">
            {currentProposal.choices.map((choice, i) => {
              const percentage = Math.round(
                ((currentProposal.scores?.[i] ?? 0) /
                  (currentProposal.scores_total ?? 1)) *
                  100
              );
              return (
                <a
                  key={choice}
                  className="px-4 py-3 group hover:ring hover:ring-emerald-700/40 rounded transition relative overflow-clip"
                  href={currentProposal.link ?? "#"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-emerald-900/20 group-hover:bg-emerald-700/20 transition rounded"
                    style={{ right: `${100 - percentage}%` }}
                  ></span>
                  <span className="relative">{choice}</span>
                </a>
              );
            })}
          </div>
          <ButtonLink
            href={currentProposal.link ?? "#"}
            target="_blank"
            size="sm"
            className="self-center"
          >
            {canVote ? "Vote" : "View"} on Snapshot.org &rarr;
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
};
