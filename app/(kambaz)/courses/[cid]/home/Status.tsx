import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { LiaFileImportSolid } from "react-icons/lia";
import { RiImportFill } from "react-icons/ri";
import { TfiTarget } from "react-icons/tfi";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaRegBell, FaRegLightbulb } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <LiaFileImportSolid className="text-lg"/> &nbsp; Import Existing Content
      </button>
      <button 
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <RiImportFill className="text-lg"/> &nbsp; Import from Commons
      </button>
      <button 
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <TfiTarget className="text-lg"/> &nbsp; Choose Home Page
      </button>
      <button 
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <IoStatsChartSharp className="text-lg"/> &nbsp; View Course Stream
      </button>
      <button 
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <IoMegaphoneOutline className="text-lg"/> &nbsp; New Announcement
      </button>
      <button 
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <IoStatsChartSharp className="text-lg"/> &nbsp; New Analytics
      </button>
      <button 
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <FaRegBell className="text-lg"/> &nbsp; View Course Notifications
      </button>
      <button
        id="wd-ai-status"
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <FaRegLightbulb className="text-lg"/> &nbsp; Sample action
      </button>
    </div>
  );
}