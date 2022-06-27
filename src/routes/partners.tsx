import { Link } from "solid-app-router";

import "../build.css";

export default function Partners () {
  document.title = "Partners - Radon Games";

  return (
    <>
      <h1 class="text-2xl text-center py-10">Partners</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 mx-0 md:mx-32 py-5 text-center">
        <div class="my-10">
          <div class="flex justify-center">
            <img class="h-8" src="/img/nebula.png" alt="Nebula Services" />
            <span class="text-xl px-2">Nebula Services</span>
          </div>
          <p class="px-20">
            <b>Nebula</b> is the biggest proxy community server, 3rd to TN and Ludicrous. Our stunning proxy is clean, incredibly fast, constantly updated and is reliable with little down time.
            <br/><br/>
            Website: <Link class="text-blue-500 hover:underline" target="_blank" href="https://tutorialread.beauty/">https://tutorialread.beauty/</Link>
            <br/>
            Discord: <Link class="text-blue-500 hover:underline" target="_blank" href="https://discord.gg/Nvuf6zDdWy">https://discord.gg/Nvuf6zDdWy</Link>
          </p>
        </div>

        <div class="my-10">
          <div class="flex justify-center">
            <img class="h-8" src="/img/ubg100.png" alt="UBG100" />
            <span class="text-xl px-2">UBG100</span>
          </div>
          <p class="px-20">
            <b>UBG100</b> is a hub for the best games on the internet, all available for free! There is so much for you to choose from.
            <br/><br/>
            Website: <Link class="text-blue-500 hover:underline" target="_blank" href="https://ubg100.github.io/">https://ubg100.github.io/</Link>
            <br/>
            Discord: <Link class="text-blue-500 hover:underline" target="_blank" href="https://discord.gg/yXJgyuByYZ">https://discord.gg/yXJgyuByYZ</Link>
          </p>
        </div>

        <div class="my-10">
          <div class="flex justify-center">
            <img class="h-8" src="/img/gamehub.png" alt="Game Hub" />
            <span class="text-xl px-2">Game Hub</span>
          </div>
          <p class="px-20">
            <b>Game Hub</b>, an unblocked games website with games ranging from shooting games, to driving/car games, w/proxies and so much more! Play now!
            <br/><br/>
            Website: <Link class="text-blue-500 hover:underline" target="_blank" href="https://xlegends.github.io/gxmehub/">https://xlegends.github.io/gxmehub/</Link>
            <br/>
            Discord: <Link class="text-blue-500 hover:underline" target="_blank" href="https://discord.gg/Fnc7hJZpC8">https://discord.gg/Fnc7hJZpC8</Link>
          </p>
        </div>

        <div class="my-10">
          <div class="flex justify-center">
            <img class="h-8" src="/img/astral.png" alt="Astral Network" />
            <span class="text-xl px-2">Astral Network</span>
          </div>
          <p class="px-20">
            Features include Beautiful Front-End UI, Ultraviolet Backend, Lightning Fast Speeds, About:Blank Cloak , Kahoot Proxy, Lucid Proxy, Premium & Free Domains
            <br/><br/>
            Website: <Link class="text-blue-500 hover:underline" target="_blank" href="https://lucidofficial.xyz/">https://lucidofficial.xyz/</Link>
            <br/>
            Discord: <Link class="text-blue-500 hover:underline" target="_blank" href="https://discord.gg/XgQsUJKdAb">https://discord.gg/XgQsUJKdAb</Link>
          </p>
        </div>

        <div class="my-10">
          <div class="flex justify-center">
            <img class="h-8" src="/img/things-proxy.png" alt="Things Proxy" />
            <span class="text-xl px-2">Things Proxy</span>
          </div>
          <p class="px-20">
            Why should you join us? We have 90+ Unblocker links for gg, iboss, cisco, relay and many others! (Relay links currently boosters only) We have tons of chill people to talk to.
            <br/><br/>
            Website: <Link class="text-blue-500 hover:underline" target="_blank" href="https://neb.bsd405.gq/">https://neb.bsd405.gq/</Link>
            <br/>
            Discord: <Link class="text-blue-500 hover:underline" target="_blank" href="https://discord.gg/k8e5MASYDp">https://discord.gg/k8e5MASYDp</Link>
          </p>
        </div>

        <div class="my-10">
          <div class="flex justify-center">
            <img class="h-8" src="/img/delta.png" alt="Delta Network" />
            <span class="text-xl px-2">Delta Network</span>
          </div>
          <p class="px-20">
            <b>Delta Network</b> is a new proxy service actively trying to enact the ideals of internet freedom, and bypass the shit spyware that the admins installed on our chromebooks.
            <br/><br/>
            Website: <Link class="text-blue-500 hover:underline" target="_blank" href="https://ixlhelp.mmsmathhelp.me/">https://ixlhelp.mmsmathhelp.me/</Link>
            <br/>
            Discord: <Link class="text-blue-500 hover:underline" target="_blank" href="https://discord.gg/ympgsgvcGS">https://discord.gg/ympgsgvcGS</Link>
          </p>
        </div>

        <div class="my-10">
          <div class="flex justify-center">
            <img class="h-8" src="/img/mathstudy.png" alt="Math Study" />
            <span class="text-xl px-2">Math Study</span>
          </div>
          <p class="px-20">
            Looking for a free to use, unblocked game website that includes Custom Proxies, Custom GoGuardian Bypass, Almost 100 Unblocked, or Proxied Games, An Active and Big Community, A Team that accepts feedback, and suggestions, and Many Exciting projects?
            <br/><br/>
            Discord: <Link class="text-blue-500 hover:underline" target="_blank" href="https://discord.gg/xwNM5DGb4g">https://discord.gg/xwNM5DGb4g</Link>
          </p>
        </div>
      </div>
    </>
  );
}