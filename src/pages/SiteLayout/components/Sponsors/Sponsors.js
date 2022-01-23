import { SponsorEmblem } from "./SponsorEmblem/SponsorEmblem";

import pcca from "../../../../static/images/sponsors/PCCA.svg";
import afpc from "../../../../static/images/sponsors/AFPC.svg";
import corporateMember from "../../../../static/images/sponsors/corporateMember.svg";
import amerCollegeOfApothecaries from "../../../../static/images/sponsors/amerCollegeOfApothecaries.svg";
import mixlabrxCom from "../../../../static/images/sponsors/mixlabrxCom.svg";
import style from "./sponsors.module.css";

export const Sponsors = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <SponsorEmblem image={pcca} />
        <SponsorEmblem image={afpc} />
        <SponsorEmblem image={corporateMember} />
        <SponsorEmblem image={amerCollegeOfApothecaries} />
        <SponsorEmblem image={mixlabrxCom} />
      </div>
    </div>
  );
};
