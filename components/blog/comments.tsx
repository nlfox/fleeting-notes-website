import Giscus from "@giscus/react";

function Comments() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <Giscus 
        id="comments"
        repo="fleetingnotes/fleeting-notes-website-md"
        repoId="R_kgDOImOn5w"
        category="Announcements"
        categoryId="DIC_kwDOImOn584CTCQN"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}

export default Comments;