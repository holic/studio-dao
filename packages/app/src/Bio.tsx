type Props = {
  name: string;
  bio: string;
  imageUrl: string;
};

export const BioCard = ({ name, bio, imageUrl }: Props) => (
  <>
    <div className="flex flex-col md:flex-row overflow-hidden">
      <img
        src={imageUrl}
        className="flex-shrink-0   h-80  aspect-square object-cover rounded-lg"
      />
      <div className="flex-grow flex flex-col justify-between px-8 md:px-12 xs:p-8 gap-8">
        <div className="space-y-4">
          <h5 className="font-dmserif text-3xl text-white">{name}</h5>
          <p></p>
          {bio}
        </div>
      </div>
    </div>
  </>
);
