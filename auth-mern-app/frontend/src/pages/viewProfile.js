import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError } from "../utils";
import Header from "./Header";
import "../Profile.css";

function ViewProfile() {
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const [internships, setInternships] = useState([]);
    const [hackathons, setHackathons] = useState([]);
    const userRole = localStorage.getItem("role");

    useEffect(() => {
        fetchProfile();
        fetchUserPosts();
    }, []);

    // Fetch user profile data
    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:8080/profile", {
                headers: { Authorization: token },
            });
            const result = await response.json();
            setUser(result);
        } catch (err) {
            handleError(err);
        }
    };

    // Fetch posts created by the logged-in user
    const fetchUserPosts = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:8080/feed/user-posts", {
                headers: { Authorization: token },
            });
            const result = await response.json();
            setUserPosts(result);
        } catch (err) {
            handleError(err);
        }
    };

      useEffect(() => {
        fetch("http://localhost:8080/interns/all")
          .then(res => res.json())
          .then(data => setInternships(data));
      }, []);

    const appliedInternships = internships.filter((intern) =>
        intern.studentsApplied.some((student) => student.student._id === userId)
      );

      useEffect(() => {
        fetch("http://localhost:8080/hackathons/all")
          .then(res => res.json())
          .then(data => setHackathons(data));
      }, []);

    const appliedHackathons = hackathons.filter((hackathon) =>
        hackathon.applicants.some((applicant) => applicant.student._id === userId)
      );


    return (
        <div className="home-container">
            <Header />
            <div className="main-content">
                <div className="profile-card">
                    <img
                        src={user.profilePic || "default-profile.jpg"}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>

                    {/* Role-Specific Fields */}
                    {user.role === "Professor" && (
                        <>
                            <p>Department: {user.department}</p>
                            <p>Subjects: {user.subjects?.join(", ")}</p>
                            <p>Handle Page: {user.handlePage}</p>
                        </>
                    )}

                    {user.role === "Alumni" && (
                        <>
                            <p>Graduation Year: {user.graduationYear}</p>
                            <p>Current Job: {user.currentJob}</p>
                            <p>Handle Page: {user.handlePage}</p>
                        </>
                    )}

                    {user.role === "Student" && (
                        <>
                            <p>Department: {user.department}</p>
                            <p>Program: {user.program}</p>
                            <p>Graduation Year: {user.graduationYear}</p>
                        </>
                    )}

                    <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
                </div>

                {/* Your Posts Section */}
                <div className="your-posts">
                    <h3>Your Posts</h3>
                    {userPosts.length === 0 ? (
                        <p>No posts yet.</p>
                    ) : (
                        userPosts.map((post) => (
                            <div key={post._id} className="post-card">
                                {/* Check if mediaUrl exists */}
                                {post.mediaUrl && (
                                    post.mediaUrl.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                                        <img src={post.mediaUrl} alt="Post media" className="post-image" />
                                    ) : (
                                        <video controls className="post-video">
                                            <source src={post.mediaUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )
                                )}
                                <p>{post.text}</p>
                                <p><strong>Likes:</strong> {post.likes.length}</p>
                                <p><strong>Comments:</strong> {post.comments.length}</p>
                                <p><strong>Shares:</strong> {post.shares.length}</p>
                                <p><small>Posted on: {new Date(post.createdAt).toLocaleString()}</small></p>
                            </div>
                        ))
                    )}
                </div>
             <div className="internships">   
      {userRole === "Student" && appliedInternships.length > 0 && (
        <>
          <h2>Applied Internships</h2>
          {appliedInternships.map((intern) => (
            <div key={intern._id} className="internship-card">
              <h3>{intern.topic}</h3>
              <p>{intern.details}</p>
              <p><strong>Posted by:</strong> {intern.postedBy?.name}</p>
              <p><strong>Status:</strong> 
                {intern.studentsApplied.find((student) => student.student._id === userId).status === "Approved" ? 
                  " Approved ✅" : " Yet to be approved ⏳"}
              </p>
              <button disabled>Applied</button>
            </div>
          ))}
        </>
      )}
      </div>
      <div className="hackathons">
        <h2>Applied Hackathons</h2>
        {appliedHackathons.map((hackathon) => (
          <div key={hackathon._id} className="hackathon-card">
            <h3>{hackathon.topic}</h3>
            <p>{hackathon.details}</p>
            <p><strong>Posted by:</strong> {hackathon.postedBy?.name}</p>
            <p><strong>Status:</strong> 
              {hackathon.applicants.find((applicant) => applicant.student._id === userId).status === "Approved" ? 
                " Approved ✅" : " Yet to be approved ⏳"}
            </p>
            <button disabled>Applied</button>
          </div>
        ))}
        </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ViewProfile; 