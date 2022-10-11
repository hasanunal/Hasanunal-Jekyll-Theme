# HasanUNAL's Jekyll Theme 

Simple minimal Jekyll blog. 

### Features

- [x] Responsive Design
- [x] Sass and inline CSS
- [x] Dark/Light theme
- [x] Anchor headings
- [x] Custom seo tags
- [x] Tags page
- [x] 404 page 
- [x] About page
- [x] Gallery page (Unsplash)
- [x] Blog page - Search bar
- [x] Robots.txt
- [x] Next & Previous Post
- [x] Atom & Json feeds
- [x] PageSpeed and w3Validator tests PASSED ✔️


## Screenshot

![light-theme](/assets/img/light-theme.png)
![dark-theme](/assets/img/dark-theme.png)

## Installation

Be sure to have all [you need](https://jekyllrb.com/docs/installation/) before running anything. 

Run local server:

```bash
$ git clone https://github.com/hasanunal/hasanunal-jekyll.git
$ cd hasanunal-jekyll
$ bundle install
$ bundle exec jekyll build
$ bundle exec jekyll serve
```

Navigate to `localhost:4000`. You're Welcome.
If you want to upload it to Github Pages, remember to update the `_congif.yml` and if you are going to upload in a repo called yournickname.github.io, remember to update the `{{ site.baseurl }}` to `{{ site.url }}` .

_config.yml edit:
```yml
google_analytics: # Google Analytics ID [option]
google_site_verification: # Google Site Verification ID [option]

unsplash_api:  # client_id
unsplash_username: # unsplash user name

url: "" # domain
baseurl: "" # sub folder [option]
```

## Contributing

If you see any typos or formatting errors in a post, or want to helping reduce backlogs or any other issue that needs to be addressed, please do not hesitate to open a pull request and fix it.

## License

This project is open source and available under the [MIT License](LICENSE.md).
