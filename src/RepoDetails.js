function RepoDetails({details,loading}){
    if(loading){
        return(
            <h1 className="loader">Loading...</h1>
        )
    }

    return(
        <div className="repo-details-container">
         <h3>Security Parameters :</h3>
        
        <div className="details-row">
            <label className="label">Private:</label>
            <span className="value">{details.private==null?" ":details.private?"It's private":"Not private"}</span>
        </div>
        <div className="details-row">
            <label className="label">Disabled:</label>
            <span className="value">{details.disabled==null?" ":details.disabled?"It's Disabled":"Not disabled"}</span>
        </div>
        <div className="details-row">
            <label className="label">Visibility:</label>
            <span className="value">{details.visibility}</span>
        </div>
        <div className="details-row">
            <label className="label">SignoffCommit:</label>
            <span className="value">{details.web_commit_signoff_required==null?"":details.web_commit_signoff_required?"Required":"Not Required"}</span>
        </div>

        

        </div>
    );
}

export default RepoDetails;