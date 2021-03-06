<template>
  <div :class="$style.FlowCard">
    <div :class="$style.FirstSectionWrapper">
      <h3>{{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}</h3>
      <div :class="[$style.Outer, $style.OuterUpper]">
        <div :class="[$style.CardBlock, $style.Past]">
          <div :class="[$style.CardBlockInner]">
            <flow-pc-past />
            <img
              :class="$style.CardBlockIcon"
              src="/flow/flow_arrow.svg"
              aria-hidden="true"
              alt=" "
            />
          </div>
        </div>
        <div :class="[$style.CardBlock, $style.Days]">
          <div :class="[$style.CardBlockInner]">
            <flow-pc-days />
            <img
              :class="$style.CardBlockIcon"
              src="/flow/flow_arrow.svg"
              aria-hidden="true"
              alt=" "
            />
          </div>
        </div>
        <div
          :class="[$style.CardBlock, $style.CardBlockSuspect, $style.Suspect]"
        >
          <div :class="[$style.CardBlockInner]">
            <flow-pc-suspect />
            <img
              :class="$style.CardBlockIcon"
              src="/flow/flow_arrow.svg"
              aria-hidden="true"
              alt=" "
            />
          </div>
        </div>
        <div :class="$style.Advisory">
          <flow-pc-advisory />
          <img
            :class="$style.AdvisoryIcon"
            src="/flow/flow_arrow.svg"
            aria-hidden="true"
            alt=" "
          />
        </div>
        <div :class="$style.Advisory2">
          <flow-pc-advisory2 />
        </div>
      </div>
    </div>
    <div :class="$style.SecondSectionWrapper">
      <h3>
        <i18n
          :class="$style.TitleSmall"
          tag="span"
          path="{advisory}による相談結果"
        >
          <template v-slot:advisory>
            <span :class="$style.TitleLarge">
              {{ $t('新型コロナ受診相談窓口') }}
            </span>
          </template>
        </i18n>
      </h3>
      <div :class="[$style.Outer, $style.OuterLower]">
        <div
          :class="[$style.CardBlock, $style.CardBlockRequired, $style.Required]"
        >
          <div :class="[$style.CardBlockInner]">
            <flow-pc-required />
            <img
              :class="$style.CardBlockIcon"
              src="/flow/flow_arrow.svg"
              aria-hidden="true"
              alt=" "
            />
            <img
              :class="$style.CardBlockIcon"
              src="/flow/flow_arrow.svg"
              aria-hidden="true"
              alt=" "
            />
          </div>
        </div>
        <div :class="[$style.CardBlock, $style.CardBlockPcr, $style.Pcr]">
          <div :class="[$style.CardBlockInner]">
            <flow-pc-pcr />
            <img
              :class="$style.CardBlockIcon"
              src="/flow/flow_arrow.svg"
              aria-hidden="true"
              alt=" "
            />
            <img
              :class="$style.CardBlockIcon"
              src="/flow/flow_arrow.svg"
              aria-hidden="true"
              alt=" "
            />
          </div>
        </div>
        <div :class="$style.NotRequired">
          <flow-pc-not-required />
        </div>
        <div :class="$style.Hospitalized">
          <flow-pc-hospitalized />
        </div>
      </div>
      <p :class="$style.Note">
        {{
          $t(
            '※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施'
          )
        }}
      </p>
    </div>
  </div>
</template>

<script>
import FlowPcPast from './FlowPcPast.vue'
import FlowPcDays from './FlowPcDays.vue'
import FlowPcSuspect from './FlowPcSuspect.vue'
import FlowPcAdvisory from './FlowPcAdvisory.vue'
import FlowPcAdvisory2 from './FlowPcAdvisory2.vue'
import FlowPcRequired from './FlowPcRequired.vue'
import FlowPcPcr from './FlowPcPcr.vue'
import FlowPcNotRequired from './FlowPcNotRequired.vue'
import FlowPcHospitalized from './FlowPcHospitalized.vue'

export default {
  components: {
    FlowPcPast,
    FlowPcDays,
    FlowPcSuspect,
    FlowPcAdvisory,
    FlowPcAdvisory2,
    FlowPcRequired,
    FlowPcPcr,
    FlowPcNotRequired,
    FlowPcHospitalized
  }
}
</script>

<style module lang="scss">
.FirstSectionWrapper {
  page-break-before: avoid;
  page-break-inside: avoid;
  > h3 {
    color: $gray-2;
    font-size: 1.5rem;
    margin-bottom: 7px;
    @media print {
      display: none;
    }
  }
}

.SecondSectionWrapper {
  page-break-inside: avoid;
  > h3 {
    color: $green-2;
    font-size: 1.5rem;
    margin-bottom: 7px;
  }
}

.FlowCard {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
  word-break: break-word;
  hyphens: auto;
  @media print {
    padding: 10px 20px 0 20px;
    margin-bottom: 0;
  }
  &GrayBg {
    background-color: $gray-5;
  }
}

.Outer {
  $grid-gap: 12px;

  display: grid;

  &Upper {
    grid-gap: $grid-gap;
    grid-template-columns: 70% 30%;
    -ms-grid-columns: 70% 12px 30%;
    grid-template-rows: repeat(3, auto);
    -ms-grid-rows: auto 12px auto 12px auto;
    // HACK: IEでGridの順番がうまくいかない対応
    // https://github.com/tokyo-metropolitan-gov/covid19/issues/1313
    & > *:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    & > *:nth-child(2) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
    }
    & > *:nth-child(3) {
      -ms-grid-column: 1;
      -ms-grid-row: 5;
    }
    & > *:nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
    }
    & > *:nth-child(5) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }

    margin-bottom: 36px;
  }

  &Lower {
    grid-gap: $grid-gap;
    grid-template-columns: repeat(2, calc(50% - 6px));
    -ms-grid-columns: calc(50% - 6px) 12px calc(50% - 6px);
    grid-template-rows: repeat(3, auto);
    -ms-grid-rows: auto 12px auto 12px auto;
    // HACK: IEでGridの順番がうまくいかない対応
    // https://github.com/tokyo-metropolitan-gov/covid19/issues/1313
    & > *:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    & > *:nth-child(2) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
      -ms-grid-row-span: 3;
    }
    & > *:nth-child(3) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
    }
    & > *:nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }
  }
}

.Title {
  @include font-size(28);

  color: $green-1;

  &Small {
    @include font-size(20);
  }

  &Large {
    @include font-size(28);
  }
}

.CardBlock {
  &Inner {
    position: relative;
  }

  &Icon {
    position: absolute;
    bottom: 10%;
    right: -30px;
    z-index: 1;
  }

  &Suspect {
    .CardBlockIcon {
      bottom: 40%;
    }
  }

  &Required {
    .CardBlockIcon:nth-of-type(1) {
      top: auto;
      bottom: -30px;
      right: auto;
      left: 22%;
      margin-top: 0;
      transform: rotate(90deg);
    }
    .CardBlockIcon:nth-of-type(2) {
      top: auto;
      bottom: 12%;
      right: -30px;
      margin-top: 0;
    }
  }

  &Pcr {
    .CardBlockIcon:nth-of-type(1) {
      top: 15%;
      bottom: auto;
      right: -30px;
      margin-top: auto;
      transform: rotateZ(-30deg);
    }
    .CardBlockIcon:nth-of-type(2) {
      top: auto;
      bottom: 15%;
      right: -30px;
      margin-top: auto;
      transform: rotateZ(30deg);
    }
  }
}
.Past {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.Days {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.Suspect {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.Advisory {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  position: relative;

  &Icon {
    position: absolute;
    left: calc(50% - 23px);
    transform: rotate(-90deg);
    z-index: 1;
  }
}

.Advisory2 {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
.Required {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.Pcr {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}
.NotRequired {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
.Note {
  margin: 16px 0;
  @media print {
    margin: 5px;
  }
}
</style>
