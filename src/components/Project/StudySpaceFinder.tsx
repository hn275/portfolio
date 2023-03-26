export function StudySpaceFinder() {
  return (
    <>
      <p>
        Study Space Finder is an app that helps students find available study
        spaces on campus (University of Victoria.) It allows students to search
        for spaces by location and time of day, and view detailed schedules of
        each room/building.
      </p>
      <p>
        The majority of my code is pushed into the backend, and the backend
        contains only my code. I&apos;ve put in a lot of the work to reverse
        engineer the&nbsp;
        <a
          href="https://github.com/hn275/StudySpaceFinder/blob/main/db/get_data.py"
          target="_blank"
          className="italic hover:underline"
        >
          requests
        </a>
        &nbsp;a student has to make to register for courses, as it was
        impossible for me to access the university's database directly.
      </p>
    </>
  );
}
