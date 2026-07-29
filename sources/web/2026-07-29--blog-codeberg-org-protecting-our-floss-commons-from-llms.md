---
kind: source
source_kind: web
source_url: https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html
ingested_at: 2026-07-29
summary: Codeberg e.V. votes to never train LLMs on user data and to discourage vibe-coded projects - externalized costs, crawler strain, license laundering, and low-effort LLM contributions as threats to the FLOSS commons
---

# https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html

```
<!DOCTYPE html>
<html lang="en" class="codeberg-design">
<head>
	<meta charset="utf-8">
	<title>Protecting our FLOSS commons from LLMs — Codeberg News</title>
	<meta name="description" content="In Brief: Two motions regarding "artificial intelligence" and Large Language...">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Codeberg e.V.">	<link rel="stylesheet" href="https://blog.codeberg.org/theme/css/pygments.css">
	<link rel="stylesheet" href="https://design.codeberg.org/design-kit/codeberg.css">
	<link href="https://fonts.codeberg.org/dist/inter/Inter%20Web/inter.css" rel="stylesheet">
	<link href="https://fonts.codeberg.org/dist/fontawesome5/css/all.min.css" rel="stylesheet">
	<script defer src="https://blog.codeberg.org/theme/js/darkmode.js"></script>
	<script defer src="https://design.codeberg.org/design-kit/codeberg.js"></script>
	<script defer src="https://design.codeberg.org/design-kit/codeberg-components.js"></script>
	<link rel="icon" href="https://blog.codeberg.org/theme/css/favicon.ico" type="image/x-icon">
	<link rel="icon" href="https://blog.codeberg.org/theme/css/favicon.svg" type="image/svg+xml">
		<link href="https://blog.codeberg.org/feeds/all.atom.xml" title="Blog" rel="alternate" type="application/atom+xml">
</head>

<body class="with-custom-webkit-scrollbars with-custom-css-scrollbars" data-dm-shortcut-enabled="true" data-sidebar-shortcut-enabled="true" data-set-preferred-theme-onload="true">
	<style type="text/css" media="screen">
		.codeberg-design .content {
			max-width: 80ch;
			margin-left: auto;
			margin-right: auto;
		}
		.codeberg-design .content-wrapper {
			padding-left: 20px;
			padding-right: 20px;
		}
	 	.codeberg-design img {
			max-width: 100%;
		}
	</style>

	<div class="page-wrapper with-navbar with-sidebar" data-sidebar-type="overlayed-sm-and-down">
		<nav class="navbar">
			<div class="navbar-content">
				<button class="btn btn-primary" type="button" onclick="halfmoon.toggleSidebar()">
					<i class="fa fa-bars" aria-hidden="true"></i>
					<span class="sr-only">Toggle sidebar</span>
				</button>
			</div>

			<a href="https://blog.codeberg.org" class="navbar-brand" title="Codeberg News">
				<img src="https://design.codeberg.org/logo-kit/icon_inverted.svg" alt="Codeberg">
				News
			</a>

			<ul class="navbar-nav d-none d-md-flex w-full">
						<li class="nav-item">
							<a href="https://codeberg.org/" class="nav-link">Codeberg</a>
						</li>
						<li class="nav-item">
							<a href="https://join.codeberg.org" class="nav-link">Join Codeberg e.V.</a>
						</li>
						<li class="nav-item">
							<a href="https://blog.codeberg.org/feeds/all.atom.xml" class="nav-link">RSS Feed</a>
						</li>
				<li class="nav-item ml-auto">
					<a href="javascript:;" onclick="toggleDarkMode()" class="nav-link text-center">
						<i class="fa fa-moon"></i>
					</a>
				</li>
			</ul>

			<div class="navbar-content d-md-none ml-auto">
				<div class="dropdown with-arrow">
					<button class="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
						Menu <i class="fa fa-angle-down" aria-hidden="true"></i>
					</button>
					<div class="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1">
						<a href="https://blog.codeberg.org" class="dropdown-item">Home</a>
							<div class="dropdown-divider my-5"></div>
								<a href="https://codeberg.org/" class="dropdown-item">Codeberg</a>
								<a href="https://join.codeberg.org" class="dropdown-item">Join Codeberg e.V.</a>
								<a href="https://blog.codeberg.org/feeds/all.atom.xml" class="dropdown-item">RSS Feed</a>
							<div class="dropdown-divider my-5"></div>
								<a rel="me" href="https://social.anoxinon.de/@Codeberg" class="dropdown-item">
									<i class="fab fa-mastodon " aria-hidden="true"></i> Mastodon
								</a>
						<div class="dropdown-divider my-5"></div>
						<a href="javascript:;" onclick="toggleDarkMode()" class="dropdown-item">
							<i class="fa fa-moon"></i>&nbsp; Toggle Dark Mode
						</a>
					</div>
				</div>
			</div>
		</nav>

		<div class="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>
		<div class="sidebar">
			<div class="sidebar-menu">
				<div class="sidebar-title">Navigation</div>
				<div class="sidebar-divider"></div>
				<a class="sidebar-link" href="https://blog.codeberg.org">Home</a>
				<a class="sidebar-link" href="https://blog.codeberg.org/archives.html">Archives</a>
				<a class="sidebar-link" href="https://blog.codeberg.org/authors.html">Authors</a>
					<a href="https://blog.codeberg.org/feeds/all.atom.xml" type="application/atom+xml" class="sidebar-link">
						Atom
					</a>
				<br>

				<div class="sidebar-title">Categories</div>
				<div class="sidebar-divider"></div>
					<a href="https://blog.codeberg.org/category/announcement.html" class="sidebar-link">
						Announcement (15)
					</a>
					<a href="https://blog.codeberg.org/category/community-spotlight.html" class="sidebar-link">
						Community Spotlight (1)
					</a>
					<a href="https://blog.codeberg.org/category/contrib.html" class="sidebar-link">
						Contrib (5)
					</a>
					<a href="https://blog.codeberg.org/category/events.html" class="sidebar-link">
						Events (3)
					</a>
					<a href="https://blog.codeberg.org/category/financial.html" class="sidebar-link">
						Financial (1)
					</a>
					<a href="https://blog.codeberg.org/category/letters-from-codeberg.html" class="sidebar-link">
						Letters from Codeberg (50)
					</a>
				<br>

				<div class="sidebar-title">Socials</div>
				<div class="sidebar-divider"></div>
						<a href="https://social.anoxinon.de/@Codeberg" class="sidebar-link">
							<i class="fab fa-mastodon pr-5" aria-hidden="true"></i> Mastodon
						</a>
			</div>

			<div class="sidebar-divider"></div>
			<p class="mt-10 mb-5 mx-20 px-5 text-muted">&copy; Codeberg e.V. 2019–2026</p>
			<a href="https://codeberg.org/codeberg/org/src/Imprint.md" class="sidebar-link">Codeberg Imprint</a>
			<a href="https://blog.getpelican.com" class="sidebar-link">Powered by Pelican</a>
		</div>

		<div class="content-wrapper">
			<div class="container-fluid">
				<div class="content">
					<div class="row">
						<div class="col-md-12">
<div class="article mx-auto" itemscope itemtype="http://schema.org/BlogPosting">
	<div class="text-center article-header">
		<h1 itemprop="name headline" class="article-title">Protecting our FLOSS commons from LLMs</h1>
			<h4>Bastian Greshake Tzovaras, Otto Richter, William Zijl</h4>

		<span class="text-muted">
			<i class="fas fa-clock"></i>
			<time datetime="2026-07-23T00:00:00+02:00" itemprop="datePublished">Thu 23 July 2026</time>
		</span>
	</div>

		<div class="text-muted">
			<span><i class="fas fa-folder"></i> Category:</span>
			<span itemprop="articleSection">
				<a href="https://blog.codeberg.org/category/contrib.html" rel="category">Contrib</a>
			</span>
		</div>


	<div itemprop="articleBody" class="article-body"><p>In Brief:</p>
<ul>
<li>Two motions regarding <em>"artificial intelligence"</em> and <em>Large Language Models</em> (LLMs) were voted on among Codeberg e. V. members and passed.</li>
<li>We are promising to not use any of your data to train LLM and explain what the planned Terms of Use change mean for 'vibe-coded' projects.</li>
<li>We believe that LLMs endanger the free/libre software ecosystem as a whole.</li>
</ul>
<p>The Codeberg e. V. annual assembly is the meeting that puts power into the hand of our active members. Proposals are discussed live, and later voted on asynchronously.</p>
<p>Since <em>Large Language Models</em> (LLMs) are an emerging but controversial technology, it is not surprising that two of the votes were concerned with Codeberg's position about this technology. The 14-day voting period ended yesterday and both proposals were accepted.</p>
<p>The first vote was a statement about Codeberg e. V.'s stance on using your data to train LLMs.</p>
<blockquote>
<p>As stated in our privacy policy, "We do not want to need your data", and this also holds for the use of our user and project data for using or training generative "AI": The Codeberg forge and its associated services are not and will not use the code or data of projects and users to train "Artificial Intelligence" tools such as Large Language Models, whose purpose is to create output modelled after their training input. As an association, we believe that these technologies are incompatible with responsibly creating and maintaining free &amp; open source software.</p>
</blockquote>
<p>The second vote was more controversial, but was also accepted with 358 agreements vs 144 disagreements (and 14 abstentions), with a high voter turn-out of around 50% of active members. It implies a change to our terms of use to prohibit 'vibe-coded projects'. We'll share thoughts about the practical impact at the end of the article.</p>
<h2>We all pay for hungry LLMs</h2>
<p>LLMs are a very costly technology, and those costs keep rising as the companies providing them have to start recouping their investments. They are not only costly for those who use and explicitly subscribe to these services. The costs are not only hidden in 'normal' cloud and service subscriptions that cross-finance the 'innovative new features' you never asked for. LLMs are so costly that companies <a href="https://drewdevault.com/blog/Stop-externalizing-your-costs-on-me/">externalize the costs</a> on a massive scale - on those who don't use them and society at large.  Increased hardware prices, energy use and environmental damage - we all pay for it!</p>
<h3>Strained servers due to nonsensical crawling</h3>
<p>In past posts we have already outlined how our infrastructure at Codeberg is <a href="https://blog.codeberg.org/letter-from-codeberg-software-is-about-humans.html">regularly put under heavy load</a> from webcrawlers of those companies who plan to ingest all of the code that is hosted on Codeberg for training their LLMs. </p>
<p>At Codeberg, we are happy to provide free and open access to code. Just run <code>git clone</code> and enjoy.</p>
<p>Unfortunately, these crawlers instead try to read every single page from Codeberg, no matter if it makes sense. This includes all the different issue filter variants, Git history, as well as the actual files at any point in Git history - even if they are still equal.</p>
<p>These needless accesses create expensive database queries that diminish the service quality for all of us, requires substantial amounts of work from our system administrators, and force us to spend time building defensive mechanisms instead of cool new stuff. Mechanisms that also affect new and existing legitimate users, as we're having to impose limits or outright blocks on their desired workflow; leaving them a worse experience with Codeberg.</p>
<h3>The development team of none</h3>
<p>Using LLMs to work with your code gives you a kick of adrenaline. You can develop at a rapid pace, build things as if you had a large team. Only that you have none. In fact, you are (often) alone, working with a statistical machine that turns energy into code.</p>
<p>It seems like many ‘vibe coders’ don't realize that they don't actually have a community around them. They build projects as if they had, and spend resources accordingly. We see projects having a lot of code activity, heavy CI/CD testing, frequent and large release binaries. Sometimes, it feels like the amount of supported platforms exceeds the amount of actual users.</p>
<p>To us, it seems ridiculous to see projects with a single developer and virtually no users consuming as much or even more resources than some of the largest community projects on Codeberg, which operate frugal with CI/CD and storage resources. We do not believe it is reasonable for Codeberg to invest our precious donation money into hosting of large ghost projects.</p>
<h3>Hardware sourcing is becoming an headache</h3>
<p>The training and deployment of LLMs has drastically raised the cost of buying hardware, in particular for SSDs and memory. To give you an example: The type of drive we sourced for € 700 only some years ago has risen to € 3.700 now - and is often out of stock. As a consequence, hosting code on Codeberg <a href="https://blog.codeberg.org/new-storage-limits-on-codeberg-what-you-need-to-know.html">is becoming more expensive</a>. </p>
<p>While we are <a href="https://blog.codeberg.org/letter-from-codeberg-we-love-our-new-infrastructure.html">owning our hardware</a>, and are thus not directly impacted by inflating 'cloud' rental costs, it means that replacing or expanding our hardware is now substantially more costly than it used (and needs) to be. While we might be able to afford paying those inflated hardware prices, it is money that we can not spend elsewhere to improve our service and foster the mission of Codeberg.</p>
<h3>A growing digital divide</h3>
<p>These price hikes also lead to a growing <em>digital divide</em>: Small and even large operators are endangered by rising costs, while only the largest cloud companies have reliable agreements for hardware. Increasing costs for services like website hosting, storage or compute can be challenging to a lot of small NGOs, local coops, research projects and other usage of digital tools that we considered for granted until recently.</p>
<p>Not only does it become more expensive to run digital infrastructure, even more basic digital tools like computers and smartphones are affected by the rising costs, turning personal computing back into a luxury — but now in a world where digital tools are a de-facto requirement to participate in society. Devices with little compute and storage capacity take away sovereignity from users and move them into the cost trap of cloud providers selling those back to you.</p>
<h3>Civic infrastructure, its users, and the environment suffer</h3>
<p>The negative impacts on infrastructures don't stop there, but also concern more basic civic infrastructure: Due to the energy and water demands that are inherent to the data centers built specifically for training LLMs, many communities already today experience rising consumer costs for both electricity and drinking water. And beyond the rising costs, those living close to the data centers are <a href="https://www.usnews.com/news/national-news/articles/2026-04-28/living-in-hell-data-center-neighbors-grapple-with-noise-air-pollution">directly affected by increasing air and noise pollution</a>.</p>
<p>To be able to power up those data centers, the companies behind them are also actively lobbying to be exempt from environmental regulations: In Frankfurt, data centers <a href="https://algorithmwatch.org/de/ressourcenverbrauch-von-ki/">already now consume 40% of the local electricity</a>, and demand is rising. To meet this demand, they want to use fossil fuels.</p>
<h2>Collaboration at danger</h2>
<p>It is not purely the digital and civic infrastructures that are impacted by the use of LLMs. The free/libre software ecosystem, of which we consider Codeberg an important part of, is a social phenomenon centered on collaboration. Working in this way is only possible thanks to free sharing and mutual learning. This includes even very small tools that are shared and re-used and around which collaboration can start out. In contrast, by adopting LLMs people tend to code <em>single-use software</em> from scratch. While this leads to an increase in 'shared' code, it is mostly code that not only has not been 'written' by anyone but is also not maintained by anyone.</p>
<h3>Losing trust in each other</h3>
<p>The widespread use of LLMs in FLOSS is instead becoming a multidimensional attack on the trust between contributors and the very idea of convivial collaboration itself. Maintainers are under an increased work-load due to people submitting (often well-meaning) low-effort, LLM-generated contributions that require substantial amounts of time to review. At the same time it is becoming increasingly less clear which projects are maintained by experienced developers and which ones are LLM-generated without any meaningful human oversight and input. In the case of copyleft projects, LLMs additionally also lead to 'license laundering', where copyleft code is stripped of its reciprocity requirements by 'generating' it out of the training data.</p>
<p>We observe an increasing trend of mistrusting each other, up to the point where people who put in actual effort to analyze issues or share their suggestions are being accused of having used LLMs when they did not. At the same time, others instruct their LLMs to hide their traces and actively avoid common patterns, prompting others in reviewing contributions and communication more carefully for signs of machine generation.</p>
<h3>Entering a vicious cycle</h3>
<p>Together, these forces make collaboration not only harder but also less rewarding: With the <em>transaction cost</em> of collaboration increasing, people are becoming less likely to contribute to creating high-quality software projects and more likely to 'vibecode' a one-off software that is specific to your need, and won't evolve beyond. We get a vicious cycle where collaboration is becoming less and less rewarding, while the amount of single-use software that's unmaintained and never sees any improvements is going up. </p>
<p>Although often well intentioned, sharing the result of an prompt and calling it "libre software" does not make the world a better place. Codeberg is not and does not want to be a place to dump such generated single-use software that no one else will ever look at. We are a place for people to collaborate and improve software together. Within this context, the recent votes can be understood as a reconfirmation of those principles: As we want to center on human collaboration, we will not actively support or engage in the creation of LLMs and will not put our limited resources to use for storing single-use software that would pollute our FLOSS commons.</p>
<h2>Evolving our terms</h2>
<p>Changing our Terms of Use sends a strong signal about our mission and projects we want to support. Having said that, you won't see a mass-deletion of content within days. Our moderation team will not start off generating an exhaustive list of affected repositories to remove. Instead, using cases like the examples below we will start operationalizing the new rules. We're humans at the other end, who care deeply about free/libre software projects and communities.</p>
<p>We acknowledge that many developers have started to embrace LLMs as a tool in their workflows. Some use it extensively and rarely code by hand, others delegate only specific tasks to it. We understand that you want to know how the change affects your projects going forward. While we can't give an easy answer, we'll share some remarks that should address most of the concerns raised in the discussion.</p>
<h3>Some early, but informal guidelines</h3>
<p>If your work fits into these cases, it is unlikely that you are affected at all:</p>
<ul>
<li>Projects who have an active community that cares about and maintains the software</li>
<li>Projects with a significant pre-LLM history</li>
<li>Maintainers who unknowingly or willingly accepted LLM-generated contributions from other contributors, if your project otherwise does not involve the heavy use of LLMs</li>
</ul>
<p>We will also not spend significant amount of time and resources to automatically scan content on Codeberg. So while the following use cases are discouraged (similar to private repositories), they are likely to be tolerated in practice:</p>
<ul>
<li>Side projects and experiments with little resource usage</li>
<li>Specific tools and custom scripts that would be unlikely to find a community anyway, even if they were not LLM-generated</li>
</ul>
<p>However, we also need to be honest about certain use cases that might no longer be welcome on Codeberg. If you see yourself on this list, you don't need to move right away, but there might be <a href="https://docs.codeberg.org/getting-started/what-is-codeberg/#alternatives-to-codeberg">other places that better fit your needs</a>:</p>
<ul>
<li>Projects that are created by LLM "agents" in autonomous ways</li>
<li>Projects written and maintained with heavy use of LLMs</li>
<li>Projects where the amount of resources (e.g. storage, CI/CD) is significantly larger than what the involved amount of people could have created by hand</li>
<li>Projects heavily tied to the LLM ecosytem, e.g. LLM-written tools to ease LLM usage</li>
<li>Users sending LLM contributions in violation of project's custom policies</li>
</ul>
<p>You can check the <a href="https://codeberg.org/Codeberg/org/commit/96fac426a32d1ba91ff879366d59bf1af54080c2">specific change added to the Terms of Use</a>.</p>
<style>
.codeberg-design ul {
    padding-left: revert !important;
}
</style></div>
</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>
```
