var READTHEDOCS_DATA = {
    "project": "hyperledger-fabric", 
    "theme": "readthedocs", 
    "version": "latest", 
    "source_suffix": ".md", 
    "api_host": "https://readthedocs.org", 
    "language": "en", 
    "commit": "551fa9b3bbb1ad53604b752794a7838f54c46491", 
    "docroot": "/home/docs/checkouts/readthedocs.org/user_builds/hyperledger-fabric/checkouts/latest/docs", 
    "builder": "mkdocs", 
    "page": null
}

// Old variables
var doc_version = "latest";
var doc_slug = "hyperledger-fabric";
var page_name = "None";
var html_theme = "readthedocs";

READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
    0, mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix));
