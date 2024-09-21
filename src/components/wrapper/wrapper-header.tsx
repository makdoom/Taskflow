"use client";

type WrapperHeaderPropType = {
  heading: string;
  subHeading: string;
};

const WrapperHeader = ({ heading, subHeading }: WrapperHeaderPropType) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      <p className="text-muted-foreground text-base text-center">
        {subHeading}
      </p>
    </div>
  );
};
export default WrapperHeader;
