import {ChangeDetectorRef, Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {
  HashMap,
  MaybeArray, ProviderScope,
  TRANSLOCO_LANG,
  TRANSLOCO_SCOPE,
  TranslocoPipe, TranslocoScope,
  TranslocoService
} from "@ngneat/transloco";

@Pipe({
  name: 'transloco'
})
export class MyTranslocoPipe {
  private trPipe: TranslocoPipe;

  constructor(
    private translocoService: TranslocoService,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    private providerScope: MaybeArray<TranslocoScope> | undefined,
    @Optional()
    @Inject(TRANSLOCO_LANG)
    private providerLang: string | undefined,
    private cdr: ChangeDetectorRef,
  ) {
    this.trPipe = new TranslocoPipe(
      this.translocoService,
      this.providerScope,
      this.providerLang,
      this.cdr,
    )
  }

  transform(key?: string | null,
            params?: HashMap,
            inlineLang?: string): string {
    console.log(this.providerScope)
    key = (this.providerScope as ProviderScope).scope + '.' + key;
    return this.trPipe.transform(key, params, inlineLang);
  }

}
