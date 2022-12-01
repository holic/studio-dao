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
        className="flex-shrink-0 max-w-sm   h-80  aspect-square object-cover rounded-lg"
      />
      <div className="flex-grow flex flex-col justify-between lg:px-8 md:px-8 py-4 gap-8">
        <div className="space-y-4">
          <h5 className="font-dmserif text-3xl text-white">{name}</h5>
          <p></p>
          {bio}
        </div>
      </div>
    </div>
  </>
);
