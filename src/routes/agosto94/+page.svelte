<script lang="ts">
  import Img from '@zerodevx/svelte-img';

  const images = import.meta.glob('$lib/assets/images/agosto94/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'run' }
  });

  const metas = import.meta.glob('$lib/assets/images/agosto94/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'meta' }
  });

  const srcs = Object.entries(images).map((i) => i[1]);
  const aspect = Object.entries(metas).map((i) => i[1]) as { width: number; height: number }[];

  const subtitles = [
    `Ci sono crepe ovunque. I segni del tempo marcano le strade e i
    muri.<br />
    Le pieghe dell'asfalto fanno vibrare i sedili di pelle della FIAT 127
    sulla quale noi bambini ci squagliamo.`,

    `Andiamo al mare con la Zia che ci racconta di Polifemo e di Ulisse
    mentre noi piccoli mangiamo grissini al sesamo.<br />
    E ci spiega dei faraglioni.<br />
    A me piacciono tanto i Ciclopi.`,

    `Andiamoci a tuffare dai, la crema la metto dopo. <br />
    Siamo dei puntini colorati in cerca di un po' di refrigerio e di
    compagnia.`,

    `Metto i mocassini ad asciugare al sole tra una nuotata e l'altra.<br />
    Mi hanno detto che a loro l'acqua di mare fa bene, li rinvigorisce.`,

    `La pelle è calda e sento un gran prurito per il sale sotto la
    maglietta. <br />
    Ma stiamo tornando a casa di nonna, e lì, forse, mi faccio una doccia
    prima di cena.`,

    `La casa è al sicuro da ogni male e si respira un odore misto tra
    profumi e speranza. <br />
    Il nonno gioca a carte da solo e il campanile suona le 17: è l'ora
    della merenda.<br />
    Mi manca la mamma.`,

    `Scendiamo in giardino a giocare mentre la nonna arrostisce i
    carciofi.<br />
    Non ci serve nient'altro, lasciateci qui a giocare per tutta l'estate,
    mangeremo più tardi.`,

    `Quando arriva papà andiamo a pescare al molo con lenze nuove, vermi e
    tanti galleggianti colorati. <br />
    Cerchiamo una scusa per stare di fronte al mare di notte.`,

    `Andiamo a Palermo, dall'altra parte. La strada è lunga e fa caldo.
    <br />
    Forse ci fermiamo per un panino da qualche parte, oppure mangiamo
    direttamente quando arriviamo, dai.<br />
    Io e Pier chiediamo in continuazione: quando arriviamo?`,

    `Signora mia, con questo caldo fa bene a stare fuori.<br />
    Ma faccia attenzione ai bambini che qui guidano come dannati.<br />
    E voi, ragazzi, cercate di rimanere all' ombra.`,

    `Io so quanto sono buoni, ma non si possono toccare a mani nude.<br />
    Papà mi dice di provare a bere un sorso di vino rosso dopo averne
    addentato uno.`,

    `L'odore delle sterpaglie e il suono delle cicale mi avvolge, mentre
    respiro a pieni polmoni il gusto dell'estate. <br />
    Devo riuscire a portarmi quel sapore dentro per tutto l'inverno.`
  ];
</script>

<section class="grid grid-rows-2 min-h-[90dvh] -mt-2 md:-mt-28">
  <div class="row-start-2">
    <h1 class="serif text-6xl uppercase font-light text-center">Agosto '94</h1>
    <p class="mx-auto max-w-md">
      Quelle estati le passavo dai nonni, lontano dai miei genitori. Potevo sentirli una volta al
      giorno, dopo le 22 quando le interurbane costavano di meno. Mi accompagnavano, mio fratello,
      le mie cugine, il gameboy e tutti gli attori di una classica estate anni '90 al sud Italia.
    </p>
  </div>
</section>

{#each srcs as src, i}
  <div
    class="wrapper flex flex-col items-center"
    style={`aspect-ratio: ${aspect[i].width / aspect[i].height}`}
  >
    <Img class="mb-5" {src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />

    <p>{@html subtitles[i]}</p>
  </div>
{/each}

<div class="mb-60" />

<style>
  h1 {
    transform: translateY(-50%);
  }
</style>
