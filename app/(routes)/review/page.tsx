import { Button } from "@/app/components";

const Review = () => {
  return (
    <div className="mb-10 ik-container space-y-5 !pt-40">
      {/* Headings */}
      <h1 className="ik-heading--h1">Heading/H1</h1>
      <h2 className="ik-heading--h2">Heading/H2</h2>
      <h3 className="ik-heading--h3">Heading/H3</h3>
      <h4 className="ik-heading--h4">Heading/H4</h4>

      {/* Body */}
      <p className="ik-body--lg--400">Body/lg/400</p>
      <p className="ik-body--lg--500">Body/lg/500</p>
      <p className="ik-body--md--400">Body/md/400</p>
      <p className="ik-body--md--600">Body/md/600</p>
      <p className="ik-body--sm--600">Body/sm/600</p>

      {/* Misc */}
      <div className="ik-misc--tagline">MISC/Tagline</div>
      <div className="ik-misc--link">MISC/Link</div>
      <div className="ik-misc--button">MISC/Button</div>
      <div className="ik-misc--label">MISC/Label</div>
      <div className="ik-misc--chip">MISC/Chip</div>
      <div className="ik-misc--nav-link">MISC/Nav-link</div>

      <Button label="lauda lassan" size="small" variant="filled" />
    </div>
  );
};

export default Review;
