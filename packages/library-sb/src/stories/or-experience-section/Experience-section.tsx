import { RichText } from '../at-richtext/RichText';
import { CollapsibleContainer } from '../ml-collapsible-container/Collapsible-container';
import type { ExperienceSectionProps, WorkField } from '../../types/components-type-props';

const transformDate = (inputDate: string) => {
  // Convert the input date to a Date object
  const dateObj = new Date(inputDate);

  // Extract the date, month and year from the date object
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Months range from 0 to 11. So, adding 1 to get 1-12.
  const year = dateObj.getFullYear();

  // Combine date, month and year to get the desired format | Output: 27/07/2023
  const formattedDate = `${date.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  return formattedDate;
};

export const ExperienceSection = ({ name, workFields }: ExperienceSectionProps) => {
  return (
    <div className="col-span-full">
      <h2 className="text-center">{name}</h2>
      <ul className="border-l-2 border-l-pink mt-20 relative grid gap-y-20">
        {workFields?.map((work: WorkField, i: number) => (
          <li
            key={i}
            className="relative pl-1/10 before:absolute before:w-20 before:h-20 before:rounded-full before:bg-pink before:-left-11"
          >
            <div className="flex bg-pink rounded-full px-10 w-fit text-sm before:absolute before:w-1/10 before:border-pink before:border-2 before:left-8 before:top-8">
              <p>{work.startDate && transformDate(work.startDate)}</p>
              <p className="px-4"> - </p>
              <p>{work.endDate ? transformDate(work.endDate) : ' Actualidad'}</p>
            </div>
            <CollapsibleContainer title={work.name}>
              <RichText className="mt-10" descriptionText={work.workDetails?.descriptionText} />
            </CollapsibleContainer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;