<div align="center">

  <img src="https://i.imgur.com/SVyi88i.png"><br>

  [![support][support-badge]][support-invite]
  [![crowdin][crowdin-badge]][crowdin-url]
  [![dependencies][dependencies-badge]][dependencies-url]
  [![jetbrains][jetbrains-badge]][jetbrains-url]
  [![codeclimate][codeclimate-badge]][codeclimate-url]
  [![circleci][circleci-badge]][circleci-url]
  ![servers-badge]
  ![commands-badge]
  ![languages-badge]
  [![backers][backers-badge]][backers-url]
  [![sponsors][sponsors-badge]][sponsors-url]
  <br>
  <br>
  <strong><a href="https://invite.switchblade.xyz/">CLICK HERE TO ADD SWITCHBLADE TO YOUR SERVER</a></strong>
</div>

---

<h2 align="center">crocketbot" is a free and open source solution to your server managing problems, built from scratch with code organization and quality in mind. Our goal is to cover as many functionalities and niches as possible, while still maintaining high quality.

<h3>Table of Contents</h3>

- [Commands](#commands)
- [Music](#music)
  - [Playback control commands](#playback-control-commands)
- [Contributing](#contributing)
  - [Ideas and discussion](#ideas-and-discussion)
  - [Writing code](#writing-code)
  - [Reporting bugs](#reporting-bugs)
  - [Triaging bug reports](#triaging-bug-reports)
  - [Translation](#translation)
- [Self-hosting](#self-hosting)
- [Branching, canary and updates](#branching-canary-and-updates)
- [Sponsors](#sponsors)
- [Backers](#backers)

<h2 align="center">Commands</h2>

Crocketbot has over 130 commands, and having to update a list here would be unproductive. Instead, we have a commands page on our website that pulls command metadata straight out of the running bot, so you always get the latest information. **[Check it out!](https://switchblade.xyz/commands)**

<h2 align="center">Music</h2>

We've put a lot of effort into our music system, so you always get the best listening experience. Our system accepts URLs from many different services, like **YouYube**, **SoundCloud**, **Spotify**, **Deezer**, **Mixer**, **Twitch**, and many more. In order to provide you ears with delightful lag-free music, we've spread our Lavalink nodes around the globe, so there's always a low latency connection avaliable to the voice server you're in.

To play a song, join a voice channel and type **`s!play <query>`**. The `<query>` can be anything you want, from a song name to a **Spotify playlist URL**, we've got you covered!

### Playback control commands

Command|Description
-|-
**`s!play <song>`**|Plays a song or adds it to the queue
**`s!queue`**|Displays the current queue
**`s!queue remove <number>`**| Removes a specific song from the queue
**`s!queue jump <number>`**| Jumps to a specific song on the queue
**`s!queue clear`**| Removes everything from the queue, except the current song
**`s!queue shuffle`**| Shuffles the queue
**`s!skip`**| Skips the current song
**`s!volume <0-150>`**| Adjusts the volume
**`s!bassboost`**| We'll leave this one for you to try yourself.

<h2 align="center">Contributing</h2>

**We want everyone to be able to help with crocketbot as easily as possible,** so we've created a list with the many ways you can contribute to the project. Take a look, and if you think you can help with any of these, please do! If you have any questions, don't hesitate to [join our community server](coming soon!) and ask as many questions as you want.

### Ideas and discussion

Have an awesome idea for a new command? We'd love to hear about it, no matter how silly you think it is. For us, no idea is a bad idea, so please(contact me davycrocket#3128 on discord) describing what you have in mind. We'll discuss it and, quite possibly, add it to the bot! You can also help by giving your opinion on [one of the many existing ideas](https://github.com/SwitchbladeBot/switchblade/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22type%3A+idea%22+) we have on our list.

### Writing code

If you know how to code in JavaScript, then feel free to give [one of the existent ideas] a try. make some changes and then open a pull request! We don't really have much documentation on how the bot ecosystem works, but you should be able to get it with a quick look under the hood.

> ⚠ **Please don't open Pull Requests with features that haven't been discussed as issues yet.** We don't want you to waste time writing a feature that might get denied. If you have an idea and want it to be in the bot, check the [Ideas and discussion](#ideas-and-discussion) paragraph above.

### Reporting bugs

Found something crashes the bot? Something isn't working like intended? Please let us know! Whenever you find a bug get in contact with me or any staff member  Please give us as much information as you can, preferably wiya screenshot

### Triaging bug reports

There are probably many [bug reports] in the issues tab of this repo already. You can help by triaging them and telling us if the, or maybe writing a comment with more information about it. The reports should have a step-by-step guide on how to reproduce the problem, so go ahead! Try to reproduce a bug yourself and tell us what you found.

### Translation

One of our main goals is to make crocketbot avaliable as many people as possible, and that's why we have put together an awesome team consisting of **more than 15 staff members** from all around the globe. Do you want to be a part of it? Awesome! We contact me  our strings through **Crowdin**, a platform made for software localisation. Go to discord and contact me davycrocket#3128 and request to join the team. After that, join our [community server](https://discord.gg/fehMCvd) and ping one of the staff team  so they can accept you and give you your role as a audit log viewer. [**Ah, and did we mention that this role lets u see the audit log? get an awesome badge on their profile card?**](https://cdn.discordapp.com/attachments/445203869115351041/587286168308154369/profile.jpg)

<h2 align="center">Self-hosting</h2>

**We ask you to please not host your own instance of crocketbot.** Even though our license allows it, self-hosted instances of the bot have brought us a lot of headache in the past. If you're considering self-hosting, please [try the official instance of the bot first](it really is a great bot😉). If you have any concerns about the security of our instance, please contact us. We'd love to talk and answer any questions you have.

> If you're really really really going to self-host the bot, please [read our license](https://github.com/SwitchbladeBot/switchblade/blob/dev/LICENSE) first, and be aware that we don't provide any self-hosting support. **You'll be on your own.**

<h2 align="center">Branching, canary and updates</h2>

We work on the `dev` branch, which is deployed automagically to **crocket industries**, our private testing , whenever commits are pushed. Crocket industries isn't publicly avaliable for everyone to add to their servers, but, if you ask nicely enough, we might open an exception.

Once we feel like the code on `dev` is stable enough, we merge it to the `master` branch, that gets deployed to **crocketbot**, the public instance that everyone can [add to their servers]

We usually do that every two months or so, but we might skip a month if we're not confident enough about the reliability of the current code. To get to know about updates as soon as they happen, follow us on medium or join our community server. We post detailed updates notes as soon as stuff goes live.

<h2 align="center">Sponsors</h2>

Sponsors are organizations and companies that contribute to our projects with money. They get their logo with a link to their website on this page! [Click here and become a sponsor today!]([sponsors-url])

