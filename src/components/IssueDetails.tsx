import { DeatailedIssue } from "../@types";

export default function IssueDetails({data}:Props){

  return (
    <div className="p-3" >
      <span>{data.}</span>
    </div>
  )
};

type Props = {
  data: DeatailedIssue;
};