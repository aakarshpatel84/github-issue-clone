import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoIssueOpened } from "react-icons/go";
import { BsCheck } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { Timer } from "./Timer";
import { BiComment } from "react-icons/bi";
import "./Issue.css";

function Issues() {
  const [totalIssues, setTotalIssues] = useState([]);
  const [eachPage, setEachPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [issueData, setIssueData] = useState(0);

  let url = "https://api.github.com/repos/roberodin/ha-samsungtv-custom";

  const pullesIssues = async () => {
    let response = await axios.get(`${url}/pulls`);
    let data = await response.data.length;
    setIssueData(data);
  };
  const dataAtBottom = async (page, data) => {
    const response = await axios.get(
      `${url}/issues?state=open&is:issue&page=${page}`
    );

    setPagesCount(response.data.length + data);
  };
  useEffect(() => {
    pullesIssues();
    const fetchIssuesData = async () => {
      try {
        const response = await axios.get(
          `${url}/issues?state=open&is:issue&page=${eachPage}`
        );
        setTotalIssues(response.data);

        const linkHeader = response.headers.link;

        if (linkHeader) {
          const regex = /page=(\d+)>; rel="last"/;
          const match = regex.exec(linkHeader);
          if (match) {
            const lastPage = parseInt(match[1]);

            let calculatePages = (lastPage - 1) * response.data.length;
            dataAtBottom(lastPage, calculatePages);
            setTotalPages(lastPage);
            setIssueData(lastPage * response.data.length);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchIssuesData();
  }, [eachPage]);

  const pageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (eachPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (eachPage >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = eachPage - 1; i <= eachPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eachPage]);

  return (
    <div className="py-8 bg-[#0d1117] sm:px-5">
      <div
        className="border-y  border-[#30363d] rounded-none sm:border ParentDiv bg-[#161b22] text-slate-100 w-[100%] sm:w-[98%] m-auto sm:rounded-t-md"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="flex font-semibold  items-center firstDiv gap-x-3"
          style={{ margin: "2% 2%" }}
        >
          <span className="text-slate-100 ">
            <GoIssueOpened size={20} />
          </span>
         <p>{Math.abs(pagesCount - issueData)} Open</p>
          <span className="ml-[10px]">
            <BsCheck color="#6d848f" size={20} />
          </span>
          <span className="text-[#6d848f] text-[14px]">17 Closed</span>
        </div>

        <div
          className="flex px-2 overflow-auto secondDiv gap-x-5"
          style={{ margin: "2% 2%" }}
        >
          <p className="flex items-center text-[#6d848f] text-[14px]">
            Author <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center text-[#6d848f] text-[14px] ">
            Label <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center text-[#6d848f] text-[14px] ">
            Projects <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center text-[#6d848f] text-[14px] ">
            Milestoens <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center  text-[#6d848f] text-[14px]">
            Assignee <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center text-[#6d848f] text-[14px] ">
            Sort <MdArrowDropDown size={20} />
          </p>
        </div>
      </div>

      <div className="box w-[100%] sm:w-[98%]">
        {totalIssues.length > 0 &&
          totalIssues.map((eachIsuue, index) => {
            index = index + 1;
            return (
              <div
                key={eachIsuue.id}
                className={`border-[#30363d]  border-y px-2 sm:border cursor-pointer hover:bg-[#161b22] group flex  sm:px-6  py-1 sm:py-5 items-center gap-x-4 ${
                  index % 30 === 0 ? "sm:rounded-b-md" : "rounded-none"
                }`}
              >
                <span className="text-green-500">
                  <GoIssueOpened size={20} />
                </span>

                <div className="flex flex-col gap-y-2 ">
                  <p className="group-hover:text-[#1f6feb] break-words text-sm sm:text-lg font-semibold">
                    {eachIsuue.title}
                  </p>
                  <div className="flex  sm:text-sm break-words  gap-x-1   sm:flex-row text-[#6d848f] text-[10px]">
                    #{eachIsuue.number} <p>opened</p>{" "}
                    <Timer time={eachIsuue.created_at} />{" "}
                    <p className=""> by</p>{" "}
                    <span className="break-words allDetails">
                      {eachIsuue.user.login}
                    </span>
                    {eachIsuue.comments > 0 && (
                      <span className="flex items-center gap-1 mx-3 ">
                        <BiComment size={20} />{" "}
                        <span>{eachIsuue.comments}</span>{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="all-divider">
        <button
          className={`text-in ${eachPage === 1 ? "gray" : "light-blue"}`}
          onClick={() => setEachPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={eachPage === 1}
        >
          {"<"} Previous
        </button>

        {pageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={`dividers-button  hidden sm:block ${
              pageNumber === eachPage ? "blue" : "light-blue"
            }`}
            onClick={() => {
              if (typeof pageNumber === "number") {
                setEachPage(pageNumber);
              }
            }}
            disabled={pageNumber === eachPage}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className={` text-in ${
            eachPage === totalPages ? "gray" : "light-blue"
          }`}
          onClick={() =>
            setEachPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
          disabled={eachPage === totalPages}
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
}

export default Issues;
