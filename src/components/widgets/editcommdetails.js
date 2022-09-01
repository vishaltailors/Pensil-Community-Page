import { useContext, useState, useEffect } from "react";
import { BannerContext } from "../../banner-provider";
import { CommunityContext } from "../../community-provider";
import { themeChange } from "theme-change";

const EditCommunityDetails = ({ setEditDetails }) => {
  const { communityDetails, setActiveTab, setCommunityDetails } =
    useContext(CommunityContext);

  const { setImageCropModal } = useContext(BannerContext);

  const [error, setError] = useState(false);

  const tabs = [
    { label: "Feed", order: 1 },
    { label: "Groups", order: 2 },
    { label: "Owner & members", order: 4 },
    { label: "Testimonials", order: 5 },
    { label: "FAQs", order: 6 },
  ];

  const themes = [
    "light",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "dracula",
    "cmyk",
    "autumn",
    "acid",
    "lemonade",
    "winter",
  ];

  const changeTabs = (e, tab) => {
    if (e.target.checked) {
      setCommunityDetails({
        ...communityDetails,
        tabs: [...communityDetails.tabs, tab],
      });
    } else {
      setCommunityDetails({
        ...communityDetails,
        tabs: communityDetails.tabs.filter((t) => t.label !== tab.label),
      });
    }
  };

  const previewBannner = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageCropModal({
        open: true,
        image: e.target.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const cancelEditing = () => {
    setEditDetails(false);
    setActiveTab(communityDetails.tabs[0].label);
    const details = JSON.parse(localStorage.getItem("details"));
    setCommunityDetails(details);
  };

  const saveDetails = () => {
    if (
      !communityDetails.title ||
      !communityDetails.briefDescription ||
      !communityDetails.detailDescription
    ) {
      setError("Oops! Require information is missing. Please check form once");
      return;
    }
    if (communityDetails.tabs.length < 3) {
      setError("Please select at least 3 tabs");
      return;
    }
    const descriptionTab = communityDetails.tabs.find(
      (t) => t.label === "Description"
    );
    let newDetails = { ...communityDetails };
    if (!descriptionTab) {
      newDetails.tabs = [
        ...communityDetails.tabs,
        { label: "Description", order: 3 },
      ];
      setCommunityDetails(newDetails);
    }
    localStorage.setItem("details", JSON.stringify(newDetails));
    setEditDetails(false);
  };

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="theme-radius bg-base-200 px-4 py-3">
      <div className="font-bold">Edit community details</div>
      <div className="mt-3 flex flex-col gap-3">
        {error && (
          <div class="alert alert-error">
            <div>
              <span>{error}</span>
            </div>
          </div>
        )}
        <select className="select select-bordered w-full" data-choose-theme>
          <option value="">Choose theme</option>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
          value={communityDetails.title}
          onChange={(e) =>
            setCommunityDetails({ ...communityDetails, title: e.target.value })
          }
        />
        <textarea
          className="textarea textarea-bordered leading-5"
          placeholder="Brief description"
          rows={4}
          value={communityDetails.briefDescription}
          onChange={(e) =>
            setCommunityDetails({
              ...communityDetails,
              briefDescription: e.target.value,
            })
          }
        ></textarea>
        <div className="border-div bg-base-100 p-3">
          <div className="mb-2 px-1 text-sm font-medium text-base-content">
            Tabs to display
          </div>
          {tabs.map((tab) => (
            <div key={tab.label} className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">{tab.label}</span>
                <input
                  name="tabs"
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  checked={
                    !!communityDetails.tabs.find((t) => t.label === tab.label)
                  }
                  onChange={(e) => changeTabs(e, tab)}
                />
              </label>
            </div>
          ))}
        </div>
        <div className="border-div bg-base-100 p-3">
          <div className="mb-2 px-1 text-sm font-medium text-base-content">
            Banner image
          </div>
          <input
            type="file"
            accept="images/*"
            className="truncate text-sm"
            style={{ maxWidth: 225 }}
            onChange={previewBannner}
          />
        </div>
        <textarea
          className="textarea textarea-bordered  leading-5"
          placeholder="Detail description (Will be displayed in description tab)"
          rows={10}
          value={communityDetails.detailDescription}
          onChange={(e) =>
            setCommunityDetails({
              ...communityDetails,
              detailDescription: e.target.value,
            })
          }
        ></textarea>

        <button className="btn btn-secondary" onClick={cancelEditing}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={saveDetails}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditCommunityDetails;
