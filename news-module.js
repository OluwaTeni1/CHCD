// Newsletter data module
const newsletterData = {
  nigeria: {
    education: {
      title: "Education Outreach in Northern Nigeria",
      subtitle:
        "Latest updates on our educational initiatives in Northern Nigeria",
      date: "September 15, 2023",
      author: "CHCD Education Team",
      readTime: "5 min read",
      headerClass: "header-nigeria",
      flagStyle:
        "linear-gradient(to bottom, #008751 0%, #008751 33%, #FFFFFF 33%, #FFFFFF 66%, #008751 66%, #008751 100%)",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Education Program" class="newsletter-image">
                
                <p>We are excited to share the progress of our educational outreach program in Northern Nigeria, where we've been working to improve literacy rates and educational access in rural communities.</p>
                
                <h3>Program Highlights</h3>
                <p>Over the past six months, our team has established learning centers in three underserved communities, providing educational resources to over 500 children who previously had limited access to formal education.</p>
                
                <div class="highlight-box">
                    <p>"Education is the most powerful weapon which you can use to change the world. Our mission in Northern Nigeria is to ensure every child has access to this powerful tool for transformation."</p>
                </div>
                
                <p>Our approach combines traditional education with practical skills training, ensuring that students receive a well-rounded education that prepares them for future opportunities.</p>
                
                <h3>Community Impact</h3>
                <p>The response from local communities has been overwhelmingly positive. Parents who were initially hesitant about formal education are now actively encouraging their children to attend our learning centers.</p>
                
                <p>We've also trained 15 local teachers, creating sustainable employment opportunities within the community and ensuring the long-term viability of our educational initiatives.</p>
                
                <h3>Future Plans</h3>
                <p>Looking ahead, we plan to expand our program to five additional communities by the end of the year. We're also developing a digital literacy component to ensure students are prepared for the technological demands of the modern world.</p>
            `,
      related: ["agriculture", "healthcare"],
    },
    agriculture: {
      title: "Sustainable Agriculture in Nigeria",
      subtitle:
        "Transforming farming practices for better yields and sustainability",
      date: "August 28, 2023",
      author: "CHCD Agriculture Team",
      readTime: "4 min read",
      headerClass: "header-nigeria",
      flagStyle:
        "linear-gradient(to bottom, #008751 0%, #008751 33%, #FFFFFF 33%, #FFFFFF 66%, #008751 66%, #008751 100%)",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Agricultural Program" class="newsletter-image">
                
                <p>Our sustainable agriculture initiative in Nigeria is helping farmers adopt modern techniques that increase yield while protecting the environment.</p>
                
                <h3>New Farming Techniques</h3>
                <p>We've introduced crop rotation, organic fertilization, and water conservation methods that have increased yields by an average of 35% while reducing water usage by 40%.</p>
                
                <div class="highlight-box">
                    <p>"The training provided by CHCD has transformed my farming practice. I'm now producing more with less effort and protecting my land for future generations." - Local Farmer</p>
                </div>
                
                <p>Our team of agricultural experts has worked directly with over 200 farmers across 15 communities, providing hands-on training and resources.</p>
                
                <h3>Environmental Impact</h3>
                <p>By promoting sustainable practices, we've helped reduce soil erosion and improve soil health across the region. The use of chemical fertilizers has decreased by 60% among participating farmers.</p>
                
                <h3>Future Goals</h3>
                <p>We plan to establish a farmer cooperative to help participants access better markets for their produce and reduce dependency on middlemen. We're also exploring solar-powered irrigation systems to address water scarcity challenges.</p>
            `,
      related: ["education", "healthcare"],
    },
  },
  kenya: {
    water: {
      title: "Clean Water Access in Kenya",
      subtitle: "Bringing sustainable water solutions to arid regions",
      date: "September 10, 2023",
      author: "CHCD Water Initiative Team",
      readTime: "4 min read",
      headerClass: "header-kenya",
      flagStyle:
        "linear-gradient(to bottom, #000000 0%, #000000 25%, #DE2910 25%, #DE2910 50%, #006600 50%, #006600 75%, #FFFFFF 75%, #FFFFFF 100%)",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Water Project" class="newsletter-image">
                
                <p>Our water initiative in Kenya's arid regions is providing sustainable solutions to water scarcity challenges that have affected communities for generations.</p>
                
                <h3>Well Construction</h3>
                <p>We've constructed five new wells and rehabilitated three existing ones, providing clean water access to over 3,000 people across eight communities.</p>
                
                <div class="highlight-box">
                    <p>"The new well has changed our lives. Women and children no longer need to walk for hours each day to fetch water." - Community Leader</p>
                </div>
                
                <p>Each well is equipped with solar-powered pumps to ensure sustainable operation without ongoing fuel costs.</p>
                
                <h3>Water Conservation Training</h3>
                <p>We've trained community members in water conservation techniques, including rainwater harvesting and efficient irrigation methods for small-scale farming.</p>
                
                <h3>Future Projects</h3>
                <p>We're planning to implement a larger-scale water distribution system that will connect multiple communities to a centralized water source. We're also exploring fog harvesting technology for areas with limited groundwater.</p>
            `,
      related: ["women", "agriculture"],
    },
  },
  // Additional countries can be added here
};

// Function to get newsletter data
function getNewsletterData(country, newsletterId) {
  if (newsletterData[country] && newsletterData[country][newsletterId]) {
    return newsletterData[country][newsletterId];
  }
  return null;
}

// Function to get related newsletters
function getRelatedNewsletters(country, relatedIds) {
  const related = [];
  if (newsletterData[country]) {
    relatedIds.forEach((id) => {
      if (newsletterData[country][id]) {
        related.push({
          id: id,
          ...newsletterData[country][id],
        });
      }
    });
  }
  return related;
}
