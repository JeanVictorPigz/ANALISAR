(self.webpackChunktwitch_twilight =
  self.webpackChunktwitch_twilight || []).push([
  [42950],
  {
    167094: function (e, t, i) {
      !(function () {
        "use strict";
        var t = {
          n: function (e) {
            var i =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(i, { a: i }), i;
          },
          d: function (e, i) {
            for (var n in i)
              t.o(i, n) &&
                !t.o(e, n) &&
                Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
          },
        };
        (t.g = (function () {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if ("object" == typeof window) return window;
          }
        })()),
          (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var n = {};
        t.r(n),
          t.d(n, {
            AuthorizationError: function () {
              return gt;
            },
            CaptureEventType: function () {
              return yt;
            },
            ErrorSource: function () {
              return mt;
            },
            ErrorType: function () {
              return pt;
            },
            LogLevel: function () {
              return Et;
            },
            MediaPlayer: function () {
              return Tt;
            },
            MetadataEventType: function () {
              return K;
            },
            MetadataID3Type: function () {
              return Q;
            },
            PlayerEventType: function () {
              return V;
            },
            PlayerState: function () {
              return Y;
            },
            RemotePlayerEvent: function () {
              return q;
            },
            create: function () {
              return vt;
            },
            createWorker: function () {
              return ht;
            },
            isPlayerSupported: function () {
              return ft;
            },
            isVP9Supported: function () {
              return W;
            },
            isWasmSupported: function () {
              return lt;
            },
            registerIVSQualityPlugin: function () {
              return Dt;
            },
            registerIVSTech: function () {
              return At;
            },
          });
        var r = i(351206),
          o = i(689728),
          s = t.n(o),
          a = 101,
          u = (function () {
            function e() {
              (this.buffer = void 0),
                (this.head = void 0),
                (this.tail = void 0),
                (this.buffer = []),
                (this.head = 0),
                (this.tail = 0);
            }
            var t = e.prototype;
            return (
              (t.push = function (e) {
                this.tail === this.buffer.length
                  ? this.buffer.push(e)
                  : (this.buffer[this.tail] = e),
                  this.tail++;
              }),
              (t.pop = function () {
                var e,
                  t = null != (e = this.buffer[this.head]) ? e : null;
                return (
                  (this.buffer[this.head] = null),
                  this.head++,
                  this.empty() && ((this.head = 0), (this.tail = 0)),
                  t
                );
              }),
              (t.size = function () {
                return this.tail - this.head;
              }),
              (t.empty = function () {
                return this.head >= this.tail;
              }),
              e
            );
          })();
        function c(e) {
          try {
            return JSON.parse(e);
          } catch (t) {
            return console.error("Failed JSON parse:", e), {};
          }
        }
        function d(e, t) {
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }
        function h(e) {
          return (
            "" === e.codecs ||
            "undefined" == typeof MediaSource ||
            MediaSource.isTypeSupported('video/mp4;codecs="' + e.codecs + '"')
          );
        }
        function l(e) {
          var t, i;
          return (
            void 0 !== e.hidden
              ? ((t = "hidden"), (i = "visibilitychange"))
              : void 0 !== e.msHidden
              ? ((t = "msHidden"), (i = "msvisibilitychange"))
              : void 0 !== e.webkitHidden &&
                ((t = "webkitHidden"), (i = "webkitvisibilitychange")),
            { hidden: t, visibilityChange: i }
          );
        }
        function f(e, t, i) {
          return Math.min(i, Math.max(t, e));
        }
        function v(e) {
          e.removeAttribute("src");
        }
        var m = 0.1,
          p = 1 << 30,
          g = 12e4,
          y = 3e3,
          E = { audio: 1936684398, video: 1986618469 };
        function k(e) {
          return "number" == typeof e.webkitDecodedFrameCount
            ? e.webkitDecodedFrameCount
            : "function" == typeof e.getVideoPlaybackQuality
            ? e.getVideoPlaybackQuality().totalVideoFrames
            : "number" == typeof e.mozDecodedFrames
            ? e.mozDecodedFrames
            : -1;
        }
        function S(e) {
          return "number" == typeof e.webkitDroppedFrameCount
            ? e.webkitDroppedFrameCount
            : "function" == typeof e.getVideoPlaybackQuality
            ? e.getVideoPlaybackQuality().droppedVideoFrames
            : -1;
        }
        function b(e, t) {
          for (var i = 0; i < t.length; i++)
            console.info(e, "start: ", t.start(i), ", end: ", t.end(i));
        }
        function T(e, t, i) {
          for (var n = 0; n < e.length; n++) {
            var r = e.start(n),
              o = e.end(n);
            if (!(o <= t)) {
              if (r - i > t) break;
              for (var s = n + 1; s < e.length && !(e.start(s) - o > i); s++)
                o = e.end(s);
              for (var a = n - 1; a >= 0 && !(r - e.end(a) > i); a--)
                r = e.start(a);
              return { start: Math.min(r, t), end: o };
            }
          }
          return { start: t, end: t };
        }
        function C(e, t, i) {
          void 0 === i && (i = m);
          var n = T(e, t, i).end - t > i;
          if (e.length > 1 || !n)
            for (var r = 0; r < e.length; r++) {
              var o = e.start(r),
                s = e.end(r);
              if (t < o && s - o > i) return o + i;
            }
          return n ? t + i : t;
        }
        function P(e, t, i) {
          return (
            e.addEventListener(t, i),
            function () {
              e.removeEventListener(t, i);
            }
          );
        }
        function A(e) {
          if (e.src) {
            var t = e.src;
            v(e), e.load(), URL.revokeObjectURL(t);
          }
        }
        var M = (function () {
            function e(e, t, i, n, r) {
              (this.rawCodec = t),
                (this.group = i),
                (this.isProtected = n),
                (this.onError = r),
                (this.pending = void 0),
                (this.unsubscribers = []),
                (this.srcBuf = void 0),
                (this.blocked = !1),
                (this.srcBuf = e),
                (this.pending = new u()),
                this.unsubscribers.push(
                  P(e, "updateend", this.process.bind(this))
                );
            }
            var t = e.prototype;
            return (
              (t.getBufferedRanges = function () {
                try {
                  var e = [];
                  if (this.srcBuf)
                    for (var t = this.srcBuf.buffered, i = 0; i < t.length; i++)
                      e.push({ start: t.start(i), end: t.end(i) });
                  return e;
                } catch (e) {
                  return [];
                }
              }),
              (t.abort = function () {
                this.schedule(function (e) {
                  e.abort();
                });
              }),
              (t.appendBuffer = function (e) {
                this.schedule(function (t) {
                  try {
                    t.appendBuffer(e);
                  } catch (e) {
                    if ("QuotaExceededError" !== e.name) throw e;
                    var i = t.buffered,
                      n = i.start(0),
                      r = i.end(i.length - 1),
                      o = (n + r) / 2;
                    t.remove(o, r);
                  }
                });
              }),
              (t.setTimestampOffset = function (e) {
                this.schedule(function (t) {
                  t.timestampOffset = e;
                });
              }),
              (t.remove = function (e, t) {
                this.schedule(function (i) {
                  var n = i.buffered;
                  if (n.length) {
                    var r = Math.max(e, n.start(0)),
                      o = Math.min(t, n.end(n.length - 1));
                    r < o && i.remove(r, o);
                  }
                });
              }),
              (t.block = function () {
                var e = this;
                return new Promise(function (t) {
                  e.schedule(function () {
                    (e.blocked = !0), t();
                  });
                });
              }),
              (t.unblock = function () {
                (this.blocked = !1), this.process();
              }),
              (t.destroy = function () {
                (this.pending = new u()),
                  this.unsubscribers.forEach(function (e) {
                    return e();
                  }),
                  (this.srcBuf = void 0);
              }),
              (t.schedule = function (e) {
                this.pending.empty() && this.canProcess()
                  ? this.safeExecute(e)
                  : (this.pending.push(e), this.process());
              }),
              (t.safeExecute = function (e) {
                try {
                  if (!this.srcBuf) throw new Error("srcBuf is undefined");
                  e(this.srcBuf);
                } catch (e) {
                  this.onError(e, !1);
                }
              }),
              (t.process = function () {
                for (; !this.pending.empty() && this.canProcess(); )
                  this.safeExecute(this.pending.pop());
              }),
              (t.canProcess = function () {
                return !(!this.srcBuf || this.srcBuf.updating || this.blocked);
              }),
              s()(e, [
                {
                  key: "buffer",
                  get: function () {
                    return this.srcBuf;
                  },
                },
                {
                  key: "codec",
                  get: function () {
                    return this.rawCodec;
                  },
                },
                {
                  key: "timestampOffset",
                  get: function () {
                    return this.buffer ? this.buffer.timestampOffset : 0;
                  },
                },
              ]),
              e
            );
          })(),
          D = (function () {
            function e(e, t, i) {
              (this.mediaSource = e),
                (this.onEnded = t),
                (this.onError = i),
                (this.sourceBuffers = Object.create(null)),
                (this.unsubscribers = []),
                this.unsubscribers.push(P(e, "sourceended", this.onEnded));
            }
            (e.isSupported = function () {
              return void 0 !== self.MediaSource;
            }),
              (e.isSupportedInWorker = function () {
                return (
                  e.isSupported() &&
                  MediaSource.canConstructInDedicatedWorker &&
                  "function" == typeof MediaSourceHandle
                );
              }),
              (e.create = function (t, i) {
                var n = new MediaSource(),
                  r = new Promise(function (r, o) {
                    var s = P(n, "sourceopen", function () {
                      "open" === n.readyState
                        ? (r(new e(n, t, i)), s())
                        : o("The MediaSource was closed upon opening");
                    });
                  });
                return { ms: n, sink: r };
              });
            var t = e.prototype;
            return (
              (t.getBufferedRanges = function (e) {
                var t, i;
                return null !=
                  (t =
                    null == (i = this.sourceBuffers[E[e]])
                      ? void 0
                      : i.getBufferedRanges())
                  ? t
                  : [];
              }),
              (t.addTrack = function (e, t, i, n) {
                var r,
                  o = this.mediaSource,
                  s = this.sourceBuffers;
                if (s[e]) return null != (r = s[e].buffer) ? r : null;
                try {
                  var a = o.addSourceBuffer("video/mp4;" + t);
                  return (
                    (s[e] = new M(a, t, i, n, this.handleError.bind(this))), a
                  );
                } catch (e) {
                  this.handleError(e, "open" === o.readyState);
                }
                return null;
              }),
              (t.append = function (e, t) {
                var i;
                null == (i = this.sourceBuffers[e]) || i.appendBuffer(t);
              }),
              (t.remove = function (e, t) {
                for (
                  var i = this.sourceBuffers, n = 0, r = Object.keys(i);
                  n < r.length;
                  n++
                )
                  i[r[n]].remove(e, t);
              }),
              (t.setTimestampOffset = function (e, t) {
                var i = this.sourceBuffers[e];
                i && (i.abort(), i.setTimestampOffset(t));
              }),
              (t.setDuration = function (e) {
                var t = this;
                this.scheduleUpdate(function () {
                  return (t.mediaSource.duration = e);
                }).catch(function (e) {
                  return t.handleError(e, !1);
                });
              }),
              (t.setLiveSeekableRange = function (e, t) {
                var i = this;
                this.scheduleUpdate(function () {
                  return i.mediaSource.setLiveSeekableRange(e, t);
                }).catch(function (e) {
                  return i.handleError(e, !1);
                });
              }),
              (t.scheduleUpdate = function (e) {
                var t = this;
                void 0 === e && (e = R);
                var i = Object.keys(this.sourceBuffers).map(function (e) {
                  return t.sourceBuffers[e];
                });
                return Promise.all(
                  i.map(function (e) {
                    return e.block();
                  })
                )
                  .then(e)
                  .then(function () {
                    return i.forEach(function (e) {
                      return e.unblock();
                    });
                  });
              }),
              (t.destroy = function () {
                this.destroySourceBuffers(),
                  this.unsubscribers.forEach(function (e) {
                    return e();
                  }),
                  (this.unsubscribers = []);
              }),
              (t.handleError = function (e, t) {
                var i = e.code || 102,
                  n = 102;
                "NotSupportedError" === e.name && (n = i = 4),
                  this.onError(n, i, e.message, t);
              }),
              (t.destroySourceBuffers = function () {
                for (var e = this.mediaSource; e.sourceBuffers.length > 0; )
                  try {
                    e.removeSourceBuffer(e.sourceBuffers[0]);
                  } catch (e) {
                    this.handleError(e, !1);
                    break;
                  }
                for (
                  var t = 0, i = Object.keys(this.sourceBuffers);
                  t < i.length;
                  t++
                ) {
                  var n = i[t];
                  this.sourceBuffers[n].destroy();
                }
                this.sourceBuffers = Object.create(null);
              }),
              s()(e, [
                {
                  key: "duration",
                  get: function () {
                    return this.mediaSource.duration;
                  },
                },
                {
                  key: "bufferProperties",
                  get: function () {
                    var e = this.sourceBuffers;
                    return Object.keys(e).map(function (t) {
                      var i = e[t];
                      return {
                        trackID: Number(t),
                        codec: i.codec,
                        mode: "mse",
                        path: "",
                        isProtected: i.isProtected,
                        group: i.group,
                        srcObj: null,
                      };
                    });
                  },
                },
              ]),
              e
            );
          })(),
          R = function () {},
          L = /^(\d+)\.(\d+)\.(\d+)[+|-]?(.*)?$/,
          w = /^(\d+)\.(\d+)[+|-]?(.*)?$/,
          _ = /^(\d+)$/,
          I = {
            chrome: !1,
            chromecast: !1,
            domain: "",
            electron: !1,
            family: "",
            firefox: !1,
            host: "",
            major: -1,
            minor: -1,
            msEdgeLegacy: !1,
            msEdgeChromium: !1,
            msIE: !1,
            name: "",
            opera: !1,
            osName: "",
            osVersion: "",
            patch: -1,
            safari: !1,
            url: "",
            userAgent: "",
            mobile: !1,
            supportsDataChannels: !1,
            supportsWebTransport: !1,
            supportsMSEInWorkers: !1,
          },
          O = null;
        function N() {
          if (O) return O;
          if ("undefined" == typeof window || "undefined" == typeof navigator)
            return (O = I);
          var e,
            t,
            i = r.getParser(navigator.userAgent),
            n =
              ((e = String(i.getBrowserVersion())),
              (t = L.exec(e) || w.exec(e) || _.exec(e) || []),
              {
                major: parseInt(t[1], 10) || 0,
                minor: parseInt(t[2], 10) || 0,
                patch: parseInt(t[3], 10) || 0,
              }),
            o = i.getEngine();
          return (O = {
            chrome: !!i.some(["chrome"]),
            chromecast: navigator.userAgent.toLowerCase().indexOf("crkey") > -1,
            domain: window.location.host.split(".").slice(-2).join("."),
            electron: !!i.some(["electron"]),
            family: i.getBrowserName().toLowerCase(),
            firefox: !!i.some(["firefox"]),
            host: window.location.host,
            major: n.major,
            minor: n.minor,
            msEdgeLegacy: !!i.some(["microsoft edge"]) && "Blink" !== o.name,
            msEdgeChromium: !!i.some(["microsoft edge"]) && "Blink" === o.name,
            msIE: !!i.some(["internet explorer"]),
            name: navigator.appVersion,
            opera: !!i.some(["opera"]),
            osName: i.getOSName(),
            osVersion: String(i.getOSVersion()),
            patch: n.patch,
            safari: !!i.some(["safari"]),
            url: window.location.href,
            userAgent: navigator.userAgent,
            mobile: !(!i.some(["mobile"]) && !i.some(["tablet"])),
            supportsDataChannels: "RTCPeerConnection" in window,
            supportsWebTransport: "WebTransport" in window,
            supportsMSEInWorkers: D.isSupportedInWorker(),
          });
        }
        var V,
          U = i(310434),
          B = t.n(U);
        !(function (e) {
          (e.INITIALIZED = "PlayerInitialized"),
            (e.QUALITY_CHANGED = "PlayerQualityChanged"),
            (e.DURATION_CHANGED = "PlayerDurationChanged"),
            (e.VOLUME_CHANGED = "PlayerVolumeChanged"),
            (e.MUTED_CHANGED = "PlayerMutedChanged"),
            (e.PLAYBACK_RATE_CHANGED = "PlayerPlaybackRateChanged"),
            (e.REBUFFERING = "PlayerRebuffering"),
            (e.AUDIO_BLOCKED = "PlayerAudioBlocked"),
            (e.PLAYBACK_BLOCKED = "PlayerPlaybackBlocked"),
            (e.ERROR = "PlayerError"),
            (e.RECOVERABLE_ERROR = "PlayerRecoverableError"),
            (e.ANALYTICS_EVENT = "PlayerAnalyticsEvent"),
            (e.TIME_UPDATE = "PlayerTimeUpdate"),
            (e.BUFFER_UPDATE = "PlayerBufferUpdate"),
            (e.SEEK_COMPLETED = "PlayerSeekCompleted"),
            (e.SESSION_DATA = "PlayerSessionData"),
            (e.STATE_CHANGED = "PlayerStateChanged"),
            (e.WORKER_ERROR = "PlayerWorkerError"),
            (e.METADATA = "PlayerMetadata"),
            (e.TEXT_CUE = "PlayerTextCue"),
            (e.TEXT_METADATA_CUE = "PlayerTextMetadataCue"),
            (e.AD_CUE = "PlayerAdCue"),
            (e.STREAM_SOURCE_CUE = "PlayerStreamSourceCue"),
            (e.NETWORK_UNAVAILABLE = "PlayerNetworkUnavailable"),
            (e.SEGMENT_DISCONTINUITY = "PlayerSegmentDiscontinuity"),
            (e.SEGMENT_METADATA = "PlayerSegmentMetadata");
        })(V || (V = {}));
        var x = null,
          F = null;
        function H(e) {
          var t = e.type === V.ANALYTICS_EVENT,
            i = e.arg && "video_error" === e.arg.name;
          if (t && i) {
            if (!x && !F) {
              var n = document.createElement("canvas");
              try {
                var r =
                  n.getContext("webgl") || n.getContext("experimental-webgl");
                if (r && "getExtension" in r) {
                  var o = r.getExtension("WEBGL_debug_renderer_info");
                  o &&
                    "getParameter" in r &&
                    ((x = r.getParameter(o.UNMASKED_RENDERER_WEBGL)),
                    (F = r.getParameter(o.UNMASKED_VENDOR_WEBGL)));
                }
              } catch (e) {}
            }
            (e.arg.properties.gl_renderer = x),
              (e.arg.properties.gl_vendor = F);
          }
          return e;
        }
        var G = (function () {
          function e() {
            var t = this;
            (this.batteryManager = void 0),
              (this.processor = this.processor.bind(this)),
              e.isSupported() &&
                window.navigator.getBattery().then(function (e) {
                  t.batteryManager = e;
                });
          }
          return (
            (e.isSupported = function () {
              var e, t;
              return (
                void 0 !==
                (null == (e = window) || null == (t = e.navigator)
                  ? void 0
                  : t.getBattery)
              );
            }),
            (e.prototype.processor = function (e) {
              var t = e.type === V.ANALYTICS_EVENT,
                i = e.arg && "minute-watched" === e.arg.name;
              return (
                t &&
                  i &&
                  this.batteryManager &&
                  (e.arg.properties.battery_percent =
                    this.batteryManager.level),
                e
              );
            }),
            e
          );
        })();
        function j() {
          return "undefined" != typeof MediaSource;
        }
        function W() {
          var e = N();
          return "Windows" === e.osName &&
            (e.chrome || e.firefox || e.msEdgeChromium) &&
            j()
            ? "mediaCapabilities" in navigator
              ? navigator.mediaCapabilities
                  .decodingInfo({
                    type: "media-source",
                    video: {
                      contentType: 'video/mp4;codecs="vp09.00.41.08"',
                      width: 1920,
                      height: 1080,
                      bitrate: 8e6,
                      framerate: 60,
                    },
                  })
                  .then(function (e) {
                    return e.supported && e.smooth;
                  })
              : Promise.resolve(
                  MediaSource.isTypeSupported(
                    'video/mp4;codecs="vp09.00.10.08"'
                  )
                )
            : Promise.resolve(!1);
        }
        var K,
          Q,
          q,
          Y,
          X = {
            keySystem: "org.w3.clearkey",
            uuid: "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",
          },
          z = {
            keySystem: "com.apple.fps.2_0",
            certUrl:
              "https://fp-keyos-twitch.licensekeyserver.com/cert/a17fd33d3843df9b17679ccf50a419b2.der",
            licenseUrl: "https://fp-keyos-twitch.licensekeyserver.com/getkey",
            uuid: "94CE86FB-07FF-4F43-ADB8-93D2FA968CA2",
          },
          J = {
            keySystem: "com.microsoft.playready",
            licenseUrl:
              "https://pr-keyos-twitch.licensekeyserver.com/core/rightsmanager.asmx",
            uuid: "9a04f079-9840-4286-ab92-e65be0885f95",
          },
          Z = {
            keySystem: "com.widevine.alpha",
            licenseUrl: "https://wv-keyos-twitch.licensekeyserver.com",
            uuid: "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
          },
          $ = { CLEARKEY: X, FAIRPLAY: z, PLAYREADY: J, WIDEVINE: Z },
          ee = {
            "com.widevine.alpha": Z,
            "com.microsoft.playready": J,
            "com.apple.fps.2_0": z,
            "org.w3.clearkey": X,
          },
          te = {
            value: 4,
            message:
              "Your browser does not support any DRM Content Decryption Modules",
          },
          ie = {
            value: 4,
            message: "There was an issue while updating DRM License",
          },
          ne = { value: 204, message: "Error while requesting DRM license" },
          re = {
            value: 201,
            message: "DRM license not authorized for this browser version",
          },
          oe = { value: 202, message: "DRM license not available" },
          se = { value: 203, message: "DRM license server error" },
          ae = { value: 4, message: "Error creating key session" },
          ue = {
            value: 4,
            message:
              "Encryption key not usable because of internal error in CDM",
          },
          ce = {
            value: 4,
            message: "Unable to find valid CDM support on media",
          },
          de = { value: 2, message: "Request for AuthXML failed" },
          he = { value: 2, message: "Request for DRM certificate failed" };
        function le(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
          return n;
        }
        function fe(e) {
          return window.WebKitMediaKeys &&
            "function" == typeof window.WebKitMediaKeys.isTypeSupported &&
            window.WebKitMediaKeys.isTypeSupported($.FAIRPLAY.keySystem)
            ? $.FAIRPLAY.uuid
            : "function" == typeof navigator.requestMediaKeySystemAccess
            ? e.safari
              ? ""
              : e.msIE || e.msEdgeLegacy
              ? $.PLAYREADY.uuid
              : $.WIDEVINE.uuid
            : "";
        }
        function ve(e, t) {
          if ((e = me(e)) === (t = me(t))) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (
            var i = new DataView(e), n = new DataView(t), r = 0;
            r < i.byteLength;
            r++
          )
            if (i.getUint8(r) !== n.getUint8(r)) return !1;
          return !0;
        }
        function me(e) {
          return e instanceof Uint8Array || e instanceof Uint16Array
            ? e.buffer
            : e;
        }
        function pe(e) {
          return (
            (t = (function (e) {
              if (null === e) return [];
              for (
                var t = new DataView(e.buffer || e), i = [], n = 0;
                !(n >= t.buffer.byteLength);

              ) {
                var r = n + t.getUint32(n);
                if (((n += 4), t.getUint32(n) === Ee("pssh"))) {
                  n += 4;
                  var o = t.getUint8(n);
                  if (0 === o || 1 === o) {
                    n++, (n += 3);
                    for (var s = "", a = 0; a < 4; a++)
                      s += ke(t.getUint8(n + a));
                    (n += 4), (s += "-");
                    for (var u = 0; u < 2; u++) s += ke(t.getUint8(n + u));
                    (n += 2), (s += "-");
                    for (var c = 0; c < 2; c++) s += ke(t.getUint8(n + c));
                    (n += 2), (s += "-");
                    for (var d = 0; d < 2; d++) s += ke(t.getUint8(n + d));
                    (n += 2), (s += "-");
                    for (var h = 0; h < 6; h++) s += ke(t.getUint8(n + h));
                    (n += 6),
                      (s = s.toLowerCase()),
                      (n += 4),
                      i.push(s),
                      (n = r);
                  } else n = r;
                } else n = r;
              }
              return i;
            })(e)),
            (i = []),
            t.forEach(function (e) {
              Object.keys($).forEach(function (t) {
                var n = $[t];
                n.uuid.toLowerCase() === e.toLowerCase() && i.push(n);
              });
            }),
            i
          );
          var t, i;
        }
        function ge(e, t) {
          return new Promise(function (i, n) {
            var r = new XMLHttpRequest();
            for (var o in (r.open(t.method, e, !0), t.headers))
              Object.prototype.hasOwnProperty.call(t.headers, o) &&
                r.setRequestHeader(o, t.headers[o]);
            (r.responseType = t.responseType),
              (r.onload = function () {
                200 === r.status && i(r.response);
              }),
              (r.onloadend = function () {
                n(r.status);
              }),
              r.send(t.body);
          });
        }
        function ye(e, t) {
          for (
            var i = new DataView(e.buffer, e.byteOffset, e.byteLength),
              n = Ee(t),
              r = 0;
            r < e.byteLength;

          ) {
            var o = i.getUint32(r);
            if (i.getUint32(r + 4) === n) return e.subarray(r + 8, r + o);
            r += o;
          }
          return new Uint8Array(e);
        }
        function Ee(e) {
          return (
            (e.charCodeAt(0) << 24) +
            (e.charCodeAt(1) << 16) +
            (e.charCodeAt(2) << 8) +
            e.charCodeAt(3)
          );
        }
        function ke(e) {
          var t = e.toString(16);
          return 1 === t.length ? "0" + t : t;
        }
        function Se(e) {
          for (
            var t = atob(e), i = t.length, n = new Uint8Array(i), r = 0;
            r < i;
            r++
          )
            n[r] = t.charCodeAt(r);
          return n;
        }
        function be(e) {
          return decodeURIComponent(e.replace(/\+/g, " "));
        }
        !(function (e) {
          (e.ID3 = "MetaID3"), (e.CAPTION = "MetaCaption");
        })(K || (K = {})),
          (function (e) {
            (e.METADATA_ID = "metadata.live-video.net"),
              (e.INBAND_METADATA_ID = "inband.metadata.live-video.net");
          })(Q || (Q = {})),
          (function (e) {
            (e.AVAILABLE = "RemotePlayerAvailable"),
              (e.UNAVAILABLE = "RemotePlayerUnavailable"),
              (e.SESSION_STARTED = "RemotePlayerSessionStarted"),
              (e.SESSION_ENDED = "RemotePlayerSessionEnded");
          })(q || (q = {})),
          (function (e) {
            (e.IDLE = "Idle"),
              (e.READY = "Ready"),
              (e.BUFFERING = "Buffering"),
              (e.PLAYING = "Playing"),
              (e.ENDED = "Ended");
          })(Y || (Y = {}));
        var Te = i(917156),
          Ce = t.n(Te),
          Pe = i(364687),
          Ae = t.n(Pe);
        function Me(e) {
          var t = e.querySelector("Challenge"),
            i = null == t ? void 0 : t.textContent;
          return i ? atob(i) : "";
        }
        function De(e) {
          var t = e.querySelectorAll("HttpHeader");
          return Array.from(t).reduce(function (e, t) {
            var i,
              n,
              r =
                null == (i = t.querySelector("name")) ? void 0 : i.textContent,
              o =
                null == (n = t.querySelector("value")) ? void 0 : n.textContent;
            return r && o && (e[r] = o), e;
          }, {});
        }
        function Re(e) {
          var t = String.fromCharCode.apply(null, new Uint16Array(e)),
            i = new DOMParser().parseFromString(t, "application/xml");
          return { headers: De(i), body: Me(i) };
        }
        function Le(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
          return n;
        }
        var we = [
            {
              initDataTypes: ["cenc"],
              audioCapabilities: [
                { contentType: 'audio/mp4;codecs="mp4a.40.2"' },
              ],
              videoCapabilities: [
                {
                  robustness: "SW_SECURE_CRYPTO",
                  contentType: 'video/mp4;codecs="avc1.42E01E"',
                },
              ],
            },
          ],
          _e = (function () {
            function e(e) {
              var t = this;
              (this.video = void 0),
                (this.listener = void 0),
                (this.cdmSupport = void 0),
                (this.selectedCDM = void 0),
                (this.mediaKeys = void 0),
                (this.pendingSessions = void 0),
                (this.sessions = void 0),
                (this.authXml = void 0),
                (this.video = e.video),
                (this.listener = e.listener),
                (this.cdmSupport = null),
                (this.selectedCDM = null),
                (this.mediaKeys = void 0),
                (this.pendingSessions = []),
                this.reset(),
                this.video.addEventListener("encrypted", function (e) {
                  return t.handleEncrypted(e);
                }),
                this.video.addEventListener("webkitneedkey", function (e) {
                  return t.handleWebKitEncrypted(e);
                });
            }
            var t = e.prototype;
            return (
              (t.configure = function (e) {
                var t = this;
                if (!this.authXml) {
                  var i = new URL(e),
                    n = i.pathname.split("/"),
                    r = n[n.length - 1].split(".")[0],
                    o = (function (e) {
                      var t = new URL(e).searchParams,
                        i = {};
                      return (
                        t.forEach(function (e, t) {
                          i[be(t)] = e ? be(e) : "";
                        }),
                        i
                      );
                    })(e),
                    s = o.token,
                    a = o.sig,
                    u =
                      "https://" +
                      i.host +
                      "/api/authxml/" +
                      r +
                      "?token=" +
                      encodeURIComponent(s) +
                      "&sig=" +
                      a;
                  this.authXml = ge(u, {
                    method: "GET",
                    responseType: "text",
                  }).catch(function (e) {
                    t.handleError(Object.assign({ code: e }, de));
                  });
                }
              }),
              (t.reset = function () {
                (this.authXml = null), (this.sessions = []);
              }),
              (t.isProtected = function () {
                return null !== this.authXml;
              }),
              (t.handleError = function (e) {
                this.listener.onSinkError({
                  value: e.value || 4,
                  code: e.code || 0,
                  message: e.message || "",
                });
              }),
              (t.hasSession = function (e) {
                if (!e) return !1;
                for (
                  var t,
                    i = (function (e, t) {
                      var i =
                        ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                      if (i) return (i = i.call(e)).next.bind(i);
                      if (
                        Array.isArray(e) ||
                        (i = (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return Le(e, t);
                            var i = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            return (
                              "Object" === i &&
                                e.constructor &&
                                (i = e.constructor.name),
                              "Map" === i || "Set" === i
                                ? Array.from(e)
                                : "Arguments" === i ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    i
                                  )
                                ? Le(e, t)
                                : void 0
                            );
                          }
                        })(e))
                      ) {
                        i && (e = i);
                        var n = 0;
                        return function () {
                          return n >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[n++] };
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(this.sessions);
                  !(t = i()).done;

                ) {
                  var n = t.value;
                  if (n.initData && ve(n.initData, e)) return !0;
                }
                return !1;
              }),
              (t.createKeySystemSupportChain = function () {
                if (null === this.cdmSupport || 0 === this.cdmSupport.length)
                  return Promise.reject(ce);
                var e = Promise.reject();
                return (
                  this.cdmSupport.forEach(function (t) {
                    e = e.catch(function () {
                      return navigator.requestMediaKeySystemAccess(
                        t.keySystem,
                        we
                      );
                    });
                  }),
                  (e = e.catch(function () {
                    return Promise.reject(te);
                  }))
                );
              }),
              (t.handleEncrypted = (function () {
                var e = Ce()(
                  Ae().mark(function e(t) {
                    var i, n;
                    return Ae().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.hasSession(t.initData)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              if (
                                (this.sessions.push(t),
                                "sinf" !== t.initDataType)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return (
                                this.handleWebKitEncrypted(t),
                                e.abrupt("return")
                              );
                            case 6:
                              if (
                                (null === this.cdmSupport &&
                                  (this.cdmSupport = pe(t.initData)),
                                void 0 !== this.mediaKeys)
                              ) {
                                e.next = 24;
                                break;
                              }
                              return (
                                (this.mediaKeys = null),
                                (e.prev = 9),
                                (e.next = 12),
                                this.createKeySystemSupportChain()
                              );
                            case 12:
                              return (
                                (i = e.sent),
                                (this.selectedCDM = ee[i.keySystem]),
                                (e.next = 16),
                                i.createMediaKeys()
                              );
                            case 16:
                              return (
                                (n = e.sent),
                                (e.next = 19),
                                this.setMediaKeys(n)
                              );
                            case 19:
                              e.next = 24;
                              break;
                            case 21:
                              (e.prev = 21),
                                (e.t0 = e.catch(9)),
                                this.handleError(e.t0);
                            case 24:
                              this.addSession(t);
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[9, 21]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.setMediaKeys = function (e) {
                var t = this;
                return (
                  (this.mediaKeys = e),
                  this.pendingSessions.forEach(function (e) {
                    return t.createSessionRequest(e).catch(function () {
                      t.handleError(ae);
                    });
                  }),
                  (this.pendingSessions = []),
                  this.video.setMediaKeys(this.mediaKeys)
                );
              }),
              (t.addSession = function (e) {
                var t = this;
                this.mediaKeys
                  ? this.createSessionRequest(e).catch(function () {
                      t.handleError(ae);
                    })
                  : this.pendingSessions.push(e);
              }),
              (t.createSessionRequest = function (e) {
                var t,
                  i = this,
                  n = e.initDataType,
                  r = e.initData,
                  o = null == (t = this.mediaKeys) ? void 0 : t.createSession();
                return o
                  ? (o.addEventListener("message", function (e) {
                      return i.handleMessage(e);
                    }),
                    o.addEventListener("keystatuseschange", function (e) {
                      return i.handleKeyStatusesChange(e, r);
                    }),
                    o.generateRequest(n, r))
                  : Promise.reject();
              }),
              (t.handleKeyStatusesChange = function (e, t) {
                var i = this,
                  n = e.target,
                  r = !1;
                n.keyStatuses.forEach(function (e) {
                  switch (e) {
                    case "expired":
                      r = !0;
                      break;
                    case "internal-error":
                      i.handleError(ue);
                  }
                }),
                  r &&
                    n.close().then(function () {
                      return i.removeSession(t);
                    });
              }),
              (t.removeSession = function (e) {
                for (var t = 0; t < this.sessions.length; t++)
                  if (this.sessions[t].initData === e)
                    return void this.sessions.splice(t, 1);
              }),
              (t.handleMessage = (function () {
                var e = Ce()(
                  Ae().mark(function e(t) {
                    var i,
                      n,
                      r = this;
                    return Ae().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = t.target),
                                (e.next = 3),
                                this.generateLicense(t.message)
                              );
                            case 3:
                              (n = e.sent) &&
                                i.update(n).catch(function () {
                                  r.handleError(ie);
                                });
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.generateLicense = (function () {
                var e = Ce()(
                  Ae().mark(function e(t) {
                    var i, n, r, o;
                    return Ae().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.selectedCDM !== $.CLEARKEY) {
                                e.next = 5;
                                break;
                              }
                              return (
                                (i = JSON.parse(new TextDecoder().decode(t))),
                                (n = i.kids.map(function (e) {
                                  return {
                                    kty: "oct",
                                    alg: "A128KW",
                                    kid: e,
                                    k: e,
                                  };
                                })),
                                (r = new TextEncoder().encode(
                                  JSON.stringify({ keys: n })
                                )),
                                e.abrupt("return", Promise.resolve(r))
                              );
                            case 5:
                              if (!this.authXml) {
                                e.next = 10;
                                break;
                              }
                              return (e.next = 8), this.authXml;
                            case 8:
                              return (
                                (o = e.sent),
                                e.abrupt("return", this.requestLicense(t, o))
                              );
                            case 10:
                              this.handleError(de);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.requestLicense = (function () {
                var e = Ce()(
                  Ae().mark(function e(t, i) {
                    var n,
                      r,
                      o,
                      s = this;
                    return Ae().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = {
                                  method: "POST",
                                  responseType: "arraybuffer",
                                  body: t,
                                  headers: {
                                    customdata: i,
                                    "Content-Type": "application/octet-stream",
                                  },
                                }),
                                this.selectedCDM === $.PLAYREADY &&
                                  ((o = Re(t)),
                                  (r.body = o.body),
                                  (r.headers = Object.assign(
                                    r.headers,
                                    o.headers
                                  ))),
                                e.abrupt(
                                  "return",
                                  ge(
                                    (null == (n = this.selectedCDM)
                                      ? void 0
                                      : n.licenseUrl) || "",
                                    r
                                  ).catch(function (e) {
                                    var t;
                                    switch (e) {
                                      case 0:
                                        t = ne;
                                        break;
                                      case 404:
                                        t = oe;
                                        break;
                                      case 403:
                                        t = re;
                                        break;
                                      default:
                                        t = se;
                                    }
                                    s.handleError(
                                      Object.assign({ code: e }, t)
                                    );
                                  })
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, i) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.handleWebKitEncrypted = (function () {
                var e = Ce()(
                  Ae().mark(function e(t) {
                    var i,
                      n = this;
                    return Ae().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.selectedCDM = $.FAIRPLAY),
                                (e.prev = 1),
                                (e.next = 4),
                                ge($.FAIRPLAY.certUrl || "", {
                                  method: "GET",
                                  responseType: "arraybuffer",
                                  headers: {
                                    Pragma: "Cache-Control: no-cache",
                                    "Cache-Control": "max-age=0",
                                  },
                                })
                              );
                            case 4:
                              (i = e.sent),
                                this.setupWebKitMediaKeys(t, i).catch(function (
                                  e
                                ) {
                                  return n.handleError(e);
                                }),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                this.handleError(
                                  Object.assign({ code: e.t0 }, he)
                                );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.setupWebKitMediaKeys = function (e, t) {
                var i = this;
                if (!e.initData)
                  return Promise.reject(
                    "Missing initData on MediaEncryptedEvent"
                  );
                this.video.webkitKeys ||
                  this.video.webkitSetMediaKeys(
                    new window.WebKitMediaKeys($.FAIRPLAY.keySystem)
                  );
                var n = (function (e) {
                    var t = ye(
                      Se(
                        JSON.parse(String.fromCharCode.apply(null, e)).sinf[0]
                      ),
                      "schi"
                    );
                    return (function (e) {
                      for (
                        var t,
                          i = "",
                          n = (function (e, t) {
                            var i =
                              ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                            if (i) return (i = i.call(e)).next.bind(i);
                            if (
                              Array.isArray(e) ||
                              (i = (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return le(e, t);
                                  var i = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                  return (
                                    "Object" === i &&
                                      e.constructor &&
                                      (i = e.constructor.name),
                                    "Map" === i || "Set" === i
                                      ? Array.from(e)
                                      : "Arguments" === i ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          i
                                        )
                                      ? le(e, t)
                                      : void 0
                                  );
                                }
                              })(e))
                            ) {
                              i && (e = i);
                              var n = 0;
                              return function () {
                                return n >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[n++] };
                              };
                            }
                            throw new TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })(e);
                        !(t = n()).done;

                      )
                        i += ke(t.value);
                      return i;
                    })(ye(t, "tenc").subarray(8, 24));
                  })(e.initData),
                  r = this.video.webkitKeys.createSession(
                    "video/mp4",
                    e.initData
                  );
                return (
                  (r.contentId = n),
                  new Promise(function (e, o) {
                    if (
                      (i.video.webkitKeys ||
                        o("Issue setting fairplay media keys"),
                      !r)
                    )
                      return o("Could not create key session");
                    r.addEventListener("webkitkeymessage", function (e) {
                      var r = e.target;
                      "certificate" ===
                      String.fromCharCode.apply(null, e.message)
                        ? r.update(new Uint8Array(t))
                        : i
                            .getWebkitLicense(e.message, n)
                            .then(function (e) {
                              var t = e.trim();
                              "<ckc>" === t.substr(0, 5) &&
                                "</ckc>" === t.substr(-6) &&
                                (t = t.slice(5, -6)),
                                r.update(Se(t));
                            })
                            .catch(o);
                    }),
                      r.addEventListener("webkitkeyadded", e),
                      r.addEventListener("webkitkeyerror", o);
                  })
                );
              }),
              (t.getWebkitLicense = function (e, t) {
                return this.authXml
                  ? this.authXml.then(function (i) {
                      var n;
                      return ge($.FAIRPLAY.licenseUrl || "", {
                        method: "POST",
                        body:
                          "spc=" +
                          ((n = e),
                          btoa(
                            String.fromCharCode.apply(null, new Uint16Array(n))
                          ) + "&assetId=") +
                          t,
                        responseType: "text",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                          customdata: i,
                        },
                      }).catch(function (e) {
                        return Promise.reject(Object.assign({ code: e }, ne));
                      });
                    })
                  : Promise.reject(de);
              }),
              e
            );
          })(),
          Ie = i(107867),
          Oe = t.n(Ie),
          Ne = (function () {
            function e() {}
            var t = e.prototype;
            return (
              (t.addTrack = function (e) {}),
              (t.bufferDuration = function () {
                return 0;
              }),
              (t.buffered = function () {
                return { start: 0, end: 0 };
              }),
              (t.getBufferedRanges = function (e) {
                return [];
              }),
              (t.captureGesture = function () {}),
              (t.configure = function (e) {}),
              (t.decodedFrames = function () {
                return 0;
              }),
              (t.delete = function () {}),
              (t.droppedFrames = function () {
                return 0;
              }),
              (t.endOfStream = function () {}),
              (t.enqueue = function (e) {}),
              (t.framerate = function () {
                return 0;
              }),
              (t.getCurrentTime = function () {
                return 0;
              }),
              (t.getDisplayHeight = function () {
                return 0;
              }),
              (t.getDisplayWidth = function () {
                return 0;
              }),
              (t.getPlaybackRate = function () {
                return 0;
              }),
              (t.getVolume = function () {
                return 0;
              }),
              (t.invoke = function (e) {
                this[e.name].call(this, e.arg);
              }),
              (t.isMuted = function () {
                return !1;
              }),
              (t.onSourceDurationChanged = function (e) {}),
              (t.pause = function () {}),
              (t.play = function () {}),
              (t.reinit = function () {}),
              (t.remove = function (e) {}),
              (t.seekTo = function (e) {}),
              (t.setMuted = function (e) {}),
              (t.setPlaybackRate = function (e) {}),
              (t.setTimestampOffset = function (e) {}),
              (t.setVolume = function (e) {}),
              (t.changeSrc = function (e) {}),
              (t.changeSrcObj = function (e) {}),
              (t.onSegmentDiscontinuity = function () {}),
              e
            );
          })(),
          Ve = "pc-chromecast-sender",
          Ue = (function (e) {
            function i(t) {
              var n;
              return (
                ((n = e.call(this) || this).remotePlayer = void 0),
                (n.remotePlayerController = void 0),
                (n.listener = void 0),
                (n.seekTime = void 0),
                (n.currentDuration = void 0),
                (n.listener = t),
                (n.currentDuration = 0),
                i
                  .prepareCastContext()
                  .then(function () {
                    (n.remotePlayer = new cast.framework.RemotePlayer()),
                      (n.remotePlayerController =
                        new cast.framework.RemotePlayerController(
                          n.remotePlayer
                        ));
                  })
                  .catch(function () {
                    n.listener.onSessionError();
                  }),
                n
              );
            }
            Oe()(i, e),
              (i.canCast = function () {
                return N().chrome;
              }),
              (i.stopLookingForRemotePlaybackDevices = function (e) {
                window.cast &&
                  window.cast.framework &&
                  cast.framework.CastContext.getInstance().removeEventListener(
                    cast.framework.CastContextEventType.CAST_STATE_CHANGED,
                    e
                  );
              }),
              (i.lookForRemotePlaybackDevices = (function () {
                var e = Ce()(
                  Ae().mark(function e(t) {
                    var n, r;
                    return Ae().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                i.prepareCastContext()
                              );
                            case 3:
                              return (
                                (n = e.sent),
                                (r = function (e) {
                                  switch (e.castState) {
                                    case cast.framework.CastState
                                      .NO_DEVICES_AVAILABLE:
                                      break;
                                    case cast.framework.CastState.NOT_CONNECTED:
                                      t.onRemoteDevice(!0);
                                      break;
                                    case cast.framework.CastState.CONNECTED:
                                      var i = n.getCurrentSession();
                                      i &&
                                        i.getSessionState() ===
                                          cast.framework.SessionState
                                            .SESSION_RESUMED &&
                                        t.onRemoteReconnect();
                                  }
                                }),
                                n.addEventListener(
                                  cast.framework.CastContextEventType
                                    .CAST_STATE_CHANGED,
                                  r
                                ),
                                n.setOptions({
                                  receiverApplicationId: "B3DCF968",
                                  autoJoinPolicy:
                                    chrome.cast.AutoJoinPolicy
                                      .TAB_AND_ORIGIN_SCOPED,
                                }),
                                e.abrupt("return", r)
                              );
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(0)),
                                t.onRemoteDevice(!1);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.prepareCastContext = (function () {
                var e = Ce()(
                  Ae().mark(function e() {
                    return Ae().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!window.cast || !window.cast.framework) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              Promise.resolve(
                                cast.framework.CastContext.getInstance()
                              )
                            );
                          case 2:
                            return e.abrupt(
                              "return",
                              new Promise(function (e, i) {
                                if (
                                  ((t.g.__onGCastApiAvailable = function (t) {
                                    t
                                      ? e(
                                          cast.framework.CastContext.getInstance()
                                        )
                                      : i();
                                  }),
                                  !document.getElementById(Ve))
                                ) {
                                  var n = document.createElement("script");
                                  (n.id = Ve),
                                    (n.onerror = function () {
                                      document.body.removeChild(n),
                                        (t.g.__onGCastApiAvailable =
                                          function () {}),
                                        i();
                                    }),
                                    (n.async = !0),
                                    (n.src =
                                      "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),
                                    document.body.appendChild(n);
                                }
                              })
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })());
            var n = i.prototype;
            return (
              (n.configure = (function () {
                var e = Ce()(
                  Ae().mark(function e(t) {
                    var n, r, o, s, a, u, c;
                    return Ae().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.path),
                                (e.prev = 1),
                                (e.next = 4),
                                i.prepareCastContext()
                              );
                            case 4:
                              if (((o = e.sent), (s = o.getCurrentSession()))) {
                                e.next = 13;
                                break;
                              }
                              return (e.next = 9), o.requestSession();
                            case 9:
                              (s = o.getCurrentSession()),
                                this.setupRemotePlayerListeners(s),
                                (e.next = 14);
                              break;
                            case 13:
                              s.getSessionState() ===
                                cast.framework.SessionState.SESSION_RESUMED &&
                                this.setupRemotePlayerListeners(s);
                            case 14:
                              return (
                                ((a = new chrome.cast.media.MediaInfo(
                                  n,
                                  ""
                                )).streamType =
                                  chrome.cast.media.StreamType.BUFFERED),
                                (u =
                                  new chrome.cast.media.GenericMediaMetadata()),
                                (a.metadata = u),
                                (a.customData = {
                                  analytics: {
                                    chromecast_sender: "player-core",
                                    platform: "web",
                                  },
                                }),
                                this.remotePlayerController.stop(),
                                (c = new chrome.cast.media.LoadRequest(a)),
                                this.seekTime > 0 &&
                                  ((c.currentTime = this.seekTime),
                                  (this.seekTime = 0)),
                                (this.currentDuration = 0),
                                (e.next = 25),
                                null == (r = s) ? void 0 : r.loadMedia(c)
                              );
                            case 25:
                              e.next = 30;
                              break;
                            case 27:
                              return (
                                (e.prev = 27),
                                (e.t0 = e.catch(1)),
                                e.abrupt("return", this.handleError(e.t0))
                              );
                            case 30:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 27]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.stopMedia = (function () {
                var e = Ce()(
                  Ae().mark(function e(t) {
                    var n, r;
                    return Ae().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              void 0 === t && (t = !0),
                              (e.next = 3),
                              i.prepareCastContext()
                            );
                          case 3:
                            (n = e.sent),
                              (r = n.getCurrentSession()) &&
                                r.getSessionState() !==
                                  cast.framework.SessionState.SESSION_RESUMED &&
                                r.endSession(t);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.invoke = function (e) {
                this[e.name].call(this, e.arg);
              }),
              (n.play = function () {
                this.remotePlayer &&
                  this.remotePlayer.isPaused &&
                  this.remotePlayerController.playOrPause();
              }),
              (n.pause = function () {
                this.remotePlayer &&
                  !this.remotePlayer.isPaused &&
                  this.remotePlayerController.playOrPause();
              }),
              (n.seekTo = function (e) {
                this.remotePlayer &&
                  (this.remotePlayer.playerState !==
                  chrome.cast.media.PlayerState.IDLE
                    ? ((this.remotePlayer.currentTime = e),
                      this.remotePlayerController.seek())
                    : (this.seekTime = e));
              }),
              (n.getCurrentTime = function () {
                return this.remotePlayer ? this.remotePlayer.currentTime : 0;
              }),
              (n.delete = function () {
                this.remotePlayer && this.stopMedia();
              }),
              (n.setMuted = function (e) {
                this.remotePlayer &&
                  e !== this.remotePlayer.isMuted &&
                  this.remotePlayerController.muteOrUnmute();
              }),
              (n.isMuted = function () {
                return !!this.remotePlayer && this.remotePlayer.isMuted;
              }),
              (n.setVolume = function (e) {
                this.remotePlayer &&
                  ((this.remotePlayer.volumeLevel = e),
                  this.remotePlayerController.setVolumeLevel());
              }),
              (n.getVolume = function () {
                return this.remotePlayer ? this.remotePlayer.volumeLevel : 0;
              }),
              (n.getDevice = (function () {
                var e = Ce()(
                  Ae().mark(function e() {
                    var t, n;
                    return Ae().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), i.prepareCastContext();
                          case 2:
                            return (
                              (t = e.sent),
                              (n = t.getCurrentSession()),
                              e.abrupt(
                                "return",
                                (null == n
                                  ? void 0
                                  : n.getCastDevice().friendlyName) || ""
                              )
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.setupRemotePlayerListeners = function (e) {
                var t = this,
                  i = (function () {
                    var i = Ce()(
                      Ae().mark(function i() {
                        var n, r;
                        return Ae().wrap(function (i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                (n = e.getMediaSession()) &&
                                  ((r = n.media),
                                  0 === t.currentDuration &&
                                    null === r.duration &&
                                    ((t.currentDuration = 1 / 0),
                                    t.listener.onSinkDurationChanged(
                                      t.currentDuration
                                    )),
                                  t.listener.onSinkTimeUpdate());
                              case 2:
                              case "end":
                                return i.stop();
                            }
                        }, i);
                      })
                    );
                    return function () {
                      return i.apply(this, arguments);
                    };
                  })(),
                  n = function () {
                    switch (t.remotePlayer.playerState) {
                      case chrome.cast.media.PlayerState.BUFFERING:
                        t.listener.onSinkIdle();
                        break;
                      case chrome.cast.media.PlayerState.PLAYING:
                        t.listener.onSinkPlaying(!1);
                        break;
                      case chrome.cast.media.PlayerState.IDLE:
                        var i = e.getMediaSession();
                        i &&
                          i.idleReason ===
                            chrome.cast.media.IdleReason.FINISHED &&
                          t.listener.onSinkEnded();
                    }
                  },
                  r = function () {
                    t.listener.onSinkVolumeChanged(
                      t.remotePlayer.volumeLevel,
                      !0
                    );
                  },
                  o = function () {
                    t.listener.onSinkMutedChanged(t.remotePlayer.isMuted);
                  },
                  s = function () {
                    0 !== t.remotePlayer.duration &&
                      ((t.currentDuration = t.remotePlayer.duration),
                      t.listener.onSinkDurationChanged(t.currentDuration));
                  },
                  a = function () {
                    t.remotePlayerController.removeEventListener(
                      cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED,
                      i
                    ),
                      t.remotePlayerController.removeEventListener(
                        cast.framework.RemotePlayerEventType
                          .PLAYER_STATE_CHANGED,
                        n
                      ),
                      t.remotePlayerController.removeEventListener(
                        cast.framework.RemotePlayerEventType
                          .VOLUME_LEVEL_CHANGED,
                        r
                      ),
                      t.remotePlayerController.removeEventListener(
                        cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED,
                        o
                      ),
                      t.remotePlayerController.removeEventListener(
                        cast.framework.RemotePlayerEventType.DURATION_CHANGED,
                        s
                      ),
                      t.listener.onSessionStop();
                  };
                e.addEventListener(
                  cast.framework.SessionEventType.MEDIA_SESSION,
                  function () {
                    t.remotePlayerController.addEventListener(
                      cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED,
                      i
                    ),
                      t.remotePlayerController.addEventListener(
                        cast.framework.RemotePlayerEventType
                          .PLAYER_STATE_CHANGED,
                        n
                      ),
                      t.remotePlayerController.addEventListener(
                        cast.framework.RemotePlayerEventType
                          .VOLUME_LEVEL_CHANGED,
                        r
                      ),
                      t.remotePlayerController.addEventListener(
                        cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED,
                        o
                      ),
                      t.remotePlayerController.addEventListener(
                        cast.framework.RemotePlayerEventType.DURATION_CHANGED,
                        s
                      ),
                      t.listener.onSessionStarted(
                        e.getCastDevice().friendlyName
                      );
                  }
                );
                var u = e.getSessionObj();
                u.addUpdateListener(function () {
                  u.status === chrome.cast.SessionStatus.STOPPED && a();
                }),
                  u.addMediaListener(a);
              }),
              (n.handleError = function (e) {
                if (chrome.cast)
                  switch (e) {
                    case chrome.cast.ErrorCode.SESSION_ERROR:
                      this.listener.onSessionError();
                      break;
                    case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
                      this.listener.onRemoteDevice(!1);
                      break;
                    case chrome.cast.ErrorCode.LOAD_MEDIA_FAILED:
                      this.listener.onLoadMediaError();
                      break;
                    case chrome.cast.ErrorCode.CANCEL:
                      this.listener.onUserCancel();
                      break;
                    default:
                      this.listener.onSinkError({
                        value: 1,
                        code: 0,
                        message: "Error requesting chromecast session",
                      });
                  }
                else
                  this.listener.onSinkError({
                    value: 1,
                    code: 0,
                    message: "Error loading chromecast SDK",
                  });
              }),
              i
            );
          })(Ne),
          Be = (function (e) {
            function t(t) {
              var i;
              return (
                ((i = e.call(this) || this).video = void 0), (i.video = t), i
              );
            }
            Oe()(t, e);
            var i = t.prototype;
            return (
              (i.seekTo = function (e) {
                this.video.currentTime = e;
              }),
              (i.setPlaybackRate = function (e) {
                this.video.playbackRate = e;
              }),
              (i.setVolume = function (e) {
                this.video.volume = e;
              }),
              (i.getVolume = function () {
                return this.video.volume;
              }),
              (i.isMuted = function () {
                return this.video.muted;
              }),
              (i.setMuted = function (e) {
                this.video.muted = e;
              }),
              (i.getPlaybackRate = function () {
                return this.video.playbackRate;
              }),
              t
            );
          })(Ne),
          xe = (function () {
            function e(e, t) {
              (this.muted = void 0),
                (this.video = void 0),
                (this.listener = void 0),
                (this.unsubscribes = []),
                (this.expectingMutedChanged = !1),
                (this.expectingVolumeChanged = !1),
                (this.expectedRateChange = void 0),
                (this.video = e),
                (this.listener = t),
                (this.muted = e.muted),
                this.unsubscribes.push(
                  P(e, "volumechange", this.volumeChange.bind(this))
                ),
                this.unsubscribes.push(
                  P(e, "ratechange", this.rateChange.bind(this))
                );
            }
            var t = e.prototype;
            return (
              (t.volumeChange = function () {
                var e = !this.expectingVolumeChanged;
                (this.expectingMutedChanged = !1),
                  (this.expectingVolumeChanged = !1);
                var t = this.video.muted;
                this.muted !== t
                  ? ((this.muted = t), this.listener.onSinkMutedChanged(t))
                  : this.listener.onSinkVolumeChanged(this.video.volume, e);
              }),
              (t.rateChange = function () {
                this.video.playbackRate !== this.expectedRateChange &&
                  this.listener.onSinkPlaybackRateChanged(
                    this.video.playbackRate
                  );
              }),
              (t.unsubscribe = function () {
                this.unsubscribes.forEach(function (e) {
                  return e();
                });
              }),
              (t.onConfigure = function () {
                this.expectingVolumeChanged &&
                  (this.listener.onSinkVolumeChanged(this.video.volume, !1),
                  (this.expectingVolumeChanged = !1)),
                  this.expectingMutedChanged &&
                    ((this.muted = this.video.muted),
                    this.listener.onSinkMutedChanged(this.video.muted),
                    (this.expectingMutedChanged = !1)),
                  (this.expectedRateChange = void 0);
              }),
              (t.trackRPC = function (e) {
                var t = e.name,
                  i = e.arg;
                "setVolume" === t && this.video.volume !== i
                  ? (this.expectingVolumeChanged = !0)
                  : "setMuted" === t && this.video.muted !== i
                  ? (this.expectingMutedChanged = !0)
                  : "setPlaybackRate" === t &&
                    this.video.playbackRate !== i &&
                    (this.expectedRateChange = i);
              }),
              e
            );
          })(),
          Fe = i(509297),
          He = t.n(Fe),
          Ge =
            ("undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : void 0 !== t.g
              ? t.g
              : void 0
            ).Promise || He(),
          je = i(366115),
          We = t.n(je),
          Ke = (function (e) {
            function t(t, i) {
              var n;
              return (
                ((n = e.call(this) || this).paused = !0),
                (n.listener = void 0),
                (n.video = void 0),
                (n.unsubscribers = void 0),
                (n.lastVolumeChangeEvent = void 0),
                (n.video = t),
                (n.listener = i),
                (n.paused = !0),
                (n.unsubscribers = []),
                n.addListener("volumechange", n.recordMuteChange.bind(We()(n))),
                n.recordMuteChange(),
                n
              );
            }
            Oe()(t, e);
            var i = t.prototype;
            return (
              (i.pause = function () {
                (this.paused = !0), this.video.pause();
              }),
              (i.setPlaybackRate = function (e) {
                this.video.playbackRate = e;
              }),
              (i.delete = function () {
                this.unsubscribers.forEach(function (e) {
                  return e();
                });
              }),
              (i.addListener = function (e, t, i) {
                void 0 === i && (i = this.video),
                  this.unsubscribers.push(P(i, e, t));
              }),
              (i.recordMuteChange = function () {
                this.lastVolumeChangeEvent = {
                  time: this.video.currentTime,
                  muted: this.video.muted,
                };
              }),
              (i.checkStopped = function (e) {
                return (
                  !this.video.paused ||
                    this.video.ended ||
                    this.video.error ||
                    this.paused ||
                    this.listener.onSinkStop(e || this.unmuteAutopause()),
                  !1
                );
              }),
              (i.unmuteAutopause = function () {
                var e = this.lastVolumeChangeEvent;
                return (
                  !this.video.muted &&
                  !e.muted &&
                  this.video.currentTime === e.time
                );
              }),
              t
            );
          })(Ne),
          Qe = (function (e) {
            function t(t, i) {
              var n;
              return (
                ((n = e.call(this, t, i) || this).onSinkIdle = void 0),
                (n.intervalId = void 0),
                (n.idle = void 0),
                (n.lastPlayhead = void 0),
                (n.lastBufferEnd = void 0),
                (n.fps = void 0),
                (n.lastDecodedFrames = void 0),
                (n.lastTimeUpdate = void 0),
                (n.idleTimeout = void 0),
                (n.playAttempt = !1),
                (n.seeking = !1),
                (n.audioBufferList = void 0),
                (n.awaitingAutoplayCompletion = !1),
                (n.intervalId = 0),
                (n.idle = !0),
                (n.lastPlayhead = 0),
                (n.lastBufferEnd = 0),
                (n.fps = 0),
                (n.lastDecodedFrames = 0),
                (n.lastTimeUpdate = performance.now()),
                (n.idleTimeout = -1),
                (n.audioBufferList = []),
                n.bindEvents(),
                n
              );
            }
            Oe()(t, e);
            var i = t.prototype;
            return (
              (i.bindEvents = function () {
                var e = this;
                this.addListener("play", function () {
                  return e.onVideoPlay();
                }),
                  this.addListener("pause", function () {
                    return e.onVideoPause();
                  }),
                  this.addListener("timeupdate", function () {
                    return e.onVideoTimeUpdate();
                  }),
                  this.addListener("ended", function () {
                    return e.onVideoEnded();
                  }),
                  this.addListener("error", function () {
                    return e.onVideoError();
                  }),
                  this.addListener("playing", function () {
                    return e.onVideoPlaying();
                  }),
                  this.addListener("seeking", function () {
                    return e.onVideoSeeking();
                  });
              }),
              (i.delete = function () {
                e.prototype.delete.call(this),
                  (this.audioBufferList = []),
                  clearInterval(this.intervalId);
              }),
              (i.play = function () {
                this.paused = !1;
                for (
                  var e = this.video.buffered, t = 0, i = 0;
                  i < e.length;
                  i++
                ) {
                  var n = e.start(i);
                  if (this.video.currentTime <= n) {
                    t = n;
                    break;
                  }
                }
                this.video.currentTime < t &&
                  (console.warn(
                    "Moving to buffered region",
                    t,
                    this.video.currentTime
                  ),
                  this.listener.onSinkGapJump(t - this.video.currentTime),
                  this.seekTo(t)),
                  this.playInternal();
              }),
              (i.endOfStream = function () {
                (this.idle = !1),
                  clearTimeout(this.idleTimeout),
                  (this.idleTimeout = -1);
              }),
              (i.framerate = function () {
                return this.fps;
              }),
              (i.seekTo = function (e) {
                this.video.seekable.length &&
                  e !== this.video.currentTime &&
                  ((this.seeking = !0), (this.video.currentTime = e));
              }),
              (i.addSourceBuffer = function (e, t) {
                (t.indexOf("mp4a") > -1 || t.indexOf("opus") > -1) &&
                  (this.audioBufferList = [e]);
              }),
              (i.clearSourceBuffers = function () {
                this.audioBufferList = [];
              }),
              (i.onIdle = function () {
                var e;
                this.listener.onSinkIdle(),
                  null == (e = this.onSinkIdle) || e.call(this);
              }),
              (i.onVideoPlay = function () {
                var e = this;
                this.playAttempt
                  ? ((this.lastPlayhead = this.video.currentTime),
                    clearInterval(this.intervalId),
                    (this.intervalId = self.setInterval(function () {
                      return e.heartbeat();
                    }, y)))
                  : (this.pause(), this.listener.play()),
                  (this.playAttempt = !1);
              }),
              (i.onVideoPause = function () {
                this.awaitingAutoplayCompletion ||
                  (this.checkStopped(!1), clearInterval(this.intervalId));
              }),
              (i.onVideoTimeUpdate = function () {
                clearTimeout(this.idleTimeout),
                  (this.idleTimeout = -1),
                  this.updateFrameRate(),
                  this.listener.onSinkTimeUpdate();
                var e = T(this.video.buffered, this.video.currentTime, m);
                this.checkBufferUpdate(e), this.updateIdle(e);
              }),
              (i.updateFrameRate = function () {
                var e = k(this.video),
                  t = performance.now();
                (this.fps =
                  (1e3 * Math.max(e - this.lastDecodedFrames, 0)) /
                  (t - this.lastTimeUpdate)),
                  (this.lastDecodedFrames = e),
                  (this.lastTimeUpdate = t);
              }),
              (i.onVideoEnded = function () {
                this.listener.onSinkEnded();
              }),
              (i.onVideoPlaying = function () {
                this.video.paused || this.listener.onSinkPlaying(this.paused);
              }),
              (i.onVideoSeeking = function () {
                this.seeking
                  ? (this.seeking = !1)
                  : this.listener.seekTo(this.video.currentTime);
              }),
              (i.onVideoError = function () {
                var e,
                  t,
                  i =
                    null !=
                    (e =
                      null == this || null == (t = this.video)
                        ? void 0
                        : t.error)
                      ? e
                      : {},
                  n = i.code,
                  r = void 0 === n ? -1 : n,
                  o = i.message,
                  s = void 0 === o ? "" : o;
                this.listener.onSinkError({ value: r, code: r, message: s });
              }),
              (i.heartbeat = function () {
                var e = T(this.video.buffered, this.video.currentTime, m);
                if (this.video.paused) clearInterval(this.intervalId);
                else if (this.video.currentTime === this.lastPlayhead) {
                  var t = C(this.video.buffered, this.video.currentTime, m);
                  t !== this.video.currentTime &&
                    (this.audioBufferList.map(function (e) {
                      b("Audio Buffer", e.buffered);
                    }),
                    b("<video> Buffer", this.video.buffered),
                    console.warn(
                      "jumping " +
                        (t - this.video.currentTime) +
                        "s gap, current position " +
                        this.video.currentTime +
                        ", new position " +
                        t
                    ),
                    this.listener.onSinkGapJump(t - this.video.currentTime),
                    this.seekTo(t)),
                    this.updateIdle(e, t === this.video.currentTime);
                } else
                  this.checkBufferUpdate(e),
                    (this.lastPlayhead = this.video.currentTime);
                this.videoDisplaySizeUpdate();
              }),
              (i.videoDisplaySizeUpdate = function () {
                var e = this.video.clientWidth * window.devicePixelRatio,
                  t = this.video.clientHeight * window.devicePixelRatio;
                this.listener.onSinkVideoDisplaySizeChanged(e, t);
              }),
              (i.checkBufferUpdate = function (e) {
                var t = e.end;
                t !== this.lastBufferEnd &&
                  ((this.lastBufferEnd = t),
                  this.listener.onSinkBufferUpdate());
              }),
              (i.updateIdle = function (e, t) {
                var i = this,
                  n = e.end,
                  r = void 0 === n ? 0 : n;
                void 0 === t && (t = !1);
                var o = this.video,
                  s = o.buffered,
                  a = o.currentTime;
                if (o.paused) this.idle = !0;
                else {
                  var u = [r].concat(
                      this.audioBufferList.map(function (e) {
                        return T(e.buffered, a, m).end;
                      })
                    ),
                    c = Math.max.apply(null, u);
                  Number.isFinite(c) || (c = 0);
                  var d = s.length,
                    h = d > 0 ? s.end(d - 1) : r,
                    l = c - a < m || (t && r > h);
                  l &&
                    !this.idle &&
                    (console.warn(
                      "playhead",
                      a,
                      "max buffer",
                      c,
                      "max played",
                      h
                    ),
                    clearTimeout(this.idleTimeout),
                    (this.idleTimeout = self.setTimeout(function () {
                      return i.onBufferingTimeout();
                    }, g)),
                    this.onIdle()),
                    (this.idle = l);
                }
              }),
              (i.onBufferingTimeout = function () {
                clearTimeout(this.idleTimeout),
                  (this.idleTimeout = -1),
                  this.listener.onSinkError({
                    value: a,
                    code: a,
                    message: "Buffering timeout",
                  });
              }),
              (i.playInternal = function () {
                var e = this;
                (this.playAttempt = !0),
                  (this.awaitingAutoplayCompletion = !0),
                  Ge.resolve(this.video.play())
                    .then(function () {
                      e.awaitingAutoplayCompletion = !1;
                    })
                    .catch(function () {
                      (e.playAttempt = !1), e.checkStopped(!0);
                    });
              }),
              t
            );
          })(Ke),
          qe = (function (e) {
            function t(t, i) {
              var n;
              return (
                ((n = e.call(this) || this).listener = t),
                (n.video = i),
                (n.playbackMonitor = void 0),
                (n.controlsObserver = void 0),
                (n.playbackMonitor = new Qe(i, t)),
                n.observeControlsChange(),
                n
              );
            }
            Oe()(t, e);
            var i = t.prototype;
            return (
              (i.configure = function (e) {
                var t = e.srcObj;
                this.video.srcObject || (this.video.srcObject = t);
              }),
              (i.invoke = function (e) {
                this[e.name].call(this, e.arg);
              }),
              (i.play = function () {
                this.playbackMonitor.play();
              }),
              (i.pause = function () {
                this.playbackMonitor.pause();
              }),
              (i.seekTo = function (e) {
                this.playbackMonitor.seekTo(e);
              }),
              (i.endOfStream = function () {
                this.playbackMonitor.endOfStream();
              }),
              (i.setVolume = function (e) {
                this.video.volume !== e && (this.video.volume = e);
              }),
              (i.getVolume = function () {
                return this.video.volume;
              }),
              (i.isMuted = function () {
                return this.video.muted;
              }),
              (i.setMuted = function (e) {
                this.video.muted !== e && (this.video.muted = e);
              }),
              (i.getDisplayWidth = function () {
                return this.video.clientWidth;
              }),
              (i.getDisplayHeight = function () {
                return this.video.clientHeight;
              }),
              (i.setPlaybackRate = function (e) {
                this.playbackMonitor.setPlaybackRate(e);
              }),
              (i.getPlaybackRate = function () {
                return this.video.playbackRate;
              }),
              (i.getCurrentTime = function () {
                return this.video.currentTime;
              }),
              (i.buffered = function () {
                return T(this.video.buffered, this.video.currentTime, m);
              }),
              (i.bufferDuration = function () {
                var e = this.buffered(),
                  t = e.start;
                return e.end - Math.max(t, this.video.currentTime);
              }),
              (i.decodedFrames = function () {
                return k(this.video);
              }),
              (i.droppedFrames = function () {
                return S(this.video);
              }),
              (i.framerate = function () {
                return this.playbackMonitor.framerate();
              }),
              (i.captureGesture = function () {
                this.playbackMonitor.play(), this.playbackMonitor.pause();
              }),
              (i.changeSrcObj = function (e) {
                var t = this.video,
                  i = t.playbackRate;
                (t.srcObject = e), (t.playbackRate = i);
              }),
              (i.delete = function () {
                var e;
                this.playbackMonitor.delete(),
                  (this.video.srcObject = null),
                  A(this.video),
                  null == (e = this.controlsObserver) || e.disconnect();
              }),
              (i.observeControlsChange = function () {
                var e = this.listener,
                  t = this.video;
                try {
                  (this.controlsObserver = new MutationObserver(function () {
                    e.onSinkControlsChanged(t.controls);
                  })).observe(t, { attributeFilter: ["controls"] }),
                    e.onSinkControlsChanged(t.controls);
                } catch (e) {}
              }),
              t
            );
          })(Ne),
          Ye = (function () {
            function e(e, t, i) {
              void 0 === i && (i = new Qe(t, e)),
                (this.listener = e),
                (this.video = t),
                (this.playbackMonitor = i),
                (this.controlsObserver = void 0),
                (this.mseSink = void 0),
                (this.awaitSink = void 0),
                this.observeControlsChange(),
                (this.awaitSink = void 0),
                P(t, "error", this.onVideoError.bind(this));
            }
            var t = e.prototype;
            return (
              (t.invoke = function (e) {
                var t = this.awaitSink,
                  i = this.mseSink;
                t && i
                  ? ["enqueue", "addTrack", "setTimestampOffset"].includes(
                      e.name
                    )
                    ? this.invokeAsync(e)
                    : this.invokeSync(e)
                  : t
                  ? this.invokeAsync(e)
                  : i && this.invokeSync(e);
              }),
              (t.initSink = function () {
                var e = this,
                  t = this.awaitSink;
                if (!this.mseSink && !t) {
                  var i = D.create(
                    this.onMediaSourceEnded.bind(this),
                    this.onMediaSourceError.bind(this)
                  );
                  (this.awaitSink = new Ge(function (t, n) {
                    i.sink
                      .then(function (i) {
                        e.handleCreateSuccess(i), t();
                      })
                      .catch(function (t) {
                        e.handleCreateError(t), n();
                      });
                  })),
                    this.changeSrc(URL.createObjectURL(i.ms));
                }
              }),
              (t.configure = function (e) {
                var t = e.trackID,
                  i = e.codec,
                  n = e.group,
                  r = e.isProtected;
                this.initSink(),
                  this.isContentProtectionChanging(r) && this.queueNewSink(),
                  this.invoke({
                    name: "addTrack",
                    arg: B()({}, Xe, {
                      trackID: t,
                      codec: i,
                      group: n,
                      isProtected: r,
                    }),
                  });
              }),
              (t.queueNewSink = function () {
                var e = this;
                this.awaitSink = new Ge(function (t, i) {
                  e.deferUntilIdle()
                    .then(function () {
                      var t = D.create(
                        e.onMediaSourceEnded.bind(e),
                        e.onMediaSourceError.bind(e)
                      );
                      return e.changeSrc(URL.createObjectURL(t.ms)), t.sink;
                    })
                    .then(function (i) {
                      e.destroyMSESink(),
                        e.handleCreateSuccess(i),
                        e.play(),
                        t();
                    })
                    .catch(function (t) {
                      e.handleCreateError(t), i();
                    });
                });
              }),
              (t.addTrack = function (e) {
                var t = e.trackID,
                  i = e.codec,
                  n = e.group,
                  r = e.isProtected,
                  o = this.mseSink;
                try {
                  var s = null == o ? void 0 : o.addTrack(t, i, n, r);
                  s && this.playbackMonitor.addSourceBuffer(s, i);
                } catch (e) {
                  this.handleCreateError(e);
                }
              }),
              (t.enqueue = function (e) {
                var t,
                  i = e.trackID,
                  n = e.buffer;
                null == (t = this.mseSink) || t.append(i, n);
              }),
              (t.endOfStream = function () {
                var e,
                  t = this;
                null == (e = this.mseSink) ||
                  e.scheduleUpdate().then(function () {
                    return t.playbackMonitor.endOfStream();
                  });
              }),
              (t.setTimestampOffset = function (e) {
                var t,
                  i = e.trackID,
                  n = e.offset;
                null == (t = this.mseSink) || t.setTimestampOffset(i, n);
              }),
              (t.onSourceDurationChanged = function (e) {
                var t = this.mseSink,
                  i = this.video;
                if (t) {
                  var n = t.duration,
                    r = (function (e, t, i) {
                      var n = e;
                      return (
                        e === 1 / 0 || e === p
                          ? i
                            ? (n = 1 / 0)
                            : i || (n = p)
                          : e !== t && (n = e),
                        n
                      );
                    })(e, n, i.controls);
                  r !== n && t.setDuration(r);
                }
              }),
              (t.play = function () {
                var e,
                  t = this;
                null == (e = this.mseSink) ||
                  e.scheduleUpdate().then(function () {
                    return t.playbackMonitor.play();
                  });
              }),
              (t.pause = function () {
                var e,
                  t = this;
                null == (e = this.mseSink) ||
                  e.scheduleUpdate().then(function () {
                    return t.playbackMonitor.pause();
                  });
              }),
              (t.remove = function (e) {
                var t,
                  i = e.start,
                  n = e.end;
                null == (t = this.mseSink) || t.remove(i, n);
              }),
              (t.seekTo = function (e) {
                var t = this.mseSink,
                  i = this.playbackMonitor,
                  n = this.video,
                  r = T(n.buffered, n.currentTime, m),
                  o = r.start,
                  s = r.end;
                e >= o && e < s
                  ? null == t ||
                    t.scheduleUpdate().then(function () {
                      return i.seekTo(e);
                    })
                  : i.seekTo(e);
              }),
              (t.setVolume = function (e) {
                this.video.volume !== e && (this.video.volume = e);
              }),
              (t.getVolume = function () {
                return this.video.volume;
              }),
              (t.isMuted = function () {
                return this.video.muted;
              }),
              (t.setMuted = function (e) {
                this.video.muted !== e && (this.video.muted = e);
              }),
              (t.getDisplayWidth = function () {
                return this.video.clientWidth;
              }),
              (t.getDisplayHeight = function () {
                return this.video.clientHeight;
              }),
              (t.setPlaybackRate = function (e) {
                this.playbackMonitor.setPlaybackRate(e);
              }),
              (t.getPlaybackRate = function () {
                return this.video.playbackRate;
              }),
              (t.getCurrentTime = function () {
                return this.video.currentTime;
              }),
              (t.buffered = function () {
                return T(this.video.buffered, this.video.currentTime, m);
              }),
              (t.getBufferedRanges = function (e) {
                var t, i;
                return null !=
                  (t =
                    null == (i = this.mseSink)
                      ? void 0
                      : i.getBufferedRanges(e))
                  ? t
                  : [];
              }),
              (t.bufferDuration = function () {
                var e = this.buffered(),
                  t = e.start;
                return e.end - Math.max(t, this.video.currentTime);
              }),
              (t.decodedFrames = function () {
                return k(this.video);
              }),
              (t.droppedFrames = function () {
                return S(this.video);
              }),
              (t.framerate = function () {
                return this.playbackMonitor.framerate();
              }),
              (t.captureGesture = function () {
                this.playbackMonitor.play(), this.playbackMonitor.pause();
              }),
              (t.changeSrc = function (e) {
                !(function (e, t) {
                  var i = e.playbackRate,
                    n = e.src;
                  n && URL.revokeObjectURL(n),
                    (e.src = t),
                    (e.playbackRate = i);
                })(this.video, e);
              }),
              (t.changeSrcObj = function (e) {}),
              (t.delete = function () {
                var e;
                this.playbackMonitor.delete(),
                  null == (e = this.controlsObserver) || e.disconnect(),
                  this.destroyMSESink(),
                  A(this.video);
              }),
              (t.invokeSync = function (e) {
                this[e.name].call(this, e.arg);
              }),
              (t.invokeAsync = function (e) {
                var t,
                  i = this;
                null == (t = this.awaitSink) ||
                  t
                    .then(function () {
                      return i.invokeSync(e);
                    })
                    .catch(function () {});
              }),
              (t.onMediaSourceEnded = function () {
                this.video.load(), this.listener.onSinkReset();
              }),
              (t.destroyMSESink = function () {
                var e = this,
                  t = function () {
                    e.mseSink && e.mseSink.destroy(),
                      (e.awaitSink = void 0),
                      (e.mseSink = void 0);
                  };
                this.mseSink
                  ? t()
                  : this.awaitSink &&
                    this.awaitSink.then(function () {
                      return t();
                    }),
                  this.playbackMonitor &&
                    this.playbackMonitor.clearSourceBuffers();
              }),
              (t.isContentProtectionChanging = function (e) {
                var t = this.awaitSink,
                  i = this.mseSink;
                if (!i || t) return !1;
                var n = i.bufferProperties;
                return (
                  !!n.length &&
                  n.some(function (t) {
                    return t.isProtected !== e;
                  })
                );
              }),
              (t.deferUntilIdle = function () {
                var e = this,
                  t = this.mseSink,
                  i = this.playbackMonitor;
                return new Ge(function (n) {
                  t && !e.video.paused
                    ? (i.onSinkIdle = function () {
                        (i.onSinkIdle = void 0), n();
                      })
                    : n();
                });
              }),
              (t.handleCreateSuccess = function (e) {
                (this.mseSink = e),
                  (this.awaitSink = void 0),
                  this.onSourceDurationChanged(p),
                  this.mseSink.setLiveSeekableRange(0, p);
              }),
              (t.handleCreateError = function (e) {
                this.listener.onSinkError({
                  value: 4,
                  code: 4,
                  message: e.toString(),
                });
              }),
              (t.onMediaSourceError = function (e, t, i, n) {
                var r = { value: e, code: t, message: i };
                n
                  ? this.listener.onSinkError(r)
                  : this.listener.onSinkRecoverableError(r);
              }),
              (t.onVideoError = function () {
                this.destroyMSESink();
              }),
              (t.observeControlsChange = function () {
                var e = this,
                  t = this.video;
                try {
                  (this.controlsObserver = new MutationObserver(function () {
                    e.invoke({
                      name: "onSourceDurationChanged",
                      arg: t.duration,
                    });
                  })).observe(t, { attributeFilter: ["controls"] });
                } catch (e) {}
              }),
              (t.onSegmentDiscontinuity = function () {}),
              e
            );
          })(),
          Xe = {
            trackID: 0,
            codec: "",
            mode: "mse",
            isProtected: !1,
            path: "",
            group: "",
            srcObj: null,
          },
          ze = (function () {
            function e() {
              (this.serverOffsetVal = e.SERVER_OFFSET_DEFAULT),
                (this.liveLatencyVal = 0),
                (this.lastTranscodeReceive = -1);
            }
            var t = e.prototype;
            return (
              (t.tryGenerateServerOffset = function (t) {
                return this.serverOffsetVal !== e.SERVER_OFFSET_DEFAULT
                  ? (console.warn(
                      "[generateServerOffset] the server offset has already been generated, skipping"
                    ),
                    !1)
                  : ((this.serverOffsetVal = (function (e, t) {
                      return new Date(1e3 * t).getTime() - e;
                    })(Date.now(), t)),
                    !0);
              }),
              (t.tryUpdateLatency = function (t) {
                return (
                  this.serverOffsetVal !== e.SERVER_OFFSET_DEFAULT &&
                  (t < this.lastTranscodeReceive
                    ? (console.warn(
                        "[updateLatency] received latency values too old, ignoring. previous: " +
                          this.lastTranscodeReceive +
                          " current: " +
                          t
                      ),
                      !1)
                    : ((this.liveLatencyVal = (function (e, t, i) {
                        return (e + t - i) / 1e3;
                      })(Date.now(), this.serverOffsetVal, t)),
                      (this.lastTranscodeReceive = t),
                      !0))
                );
              }),
              s()(e, [
                {
                  key: "serverOffset",
                  get: function () {
                    return this.serverOffsetVal;
                  },
                },
                {
                  key: "liveLatency",
                  get: function () {
                    return this.liveLatencyVal;
                  },
                },
              ]),
              e
            );
          })();
        ze.SERVER_OFFSET_DEFAULT = -1;
        var Je,
          Ze,
          $e = function (e) {
            var t = parseFloat(e);
            if (!isNaN(t)) return t;
          };
        !(function (e) {
          (e.ID3 = "org.id3"), (e.APPLE_HLS = "com.apple.quicktime.HLS");
        })(Je || (Je = {})),
          (function (e) {
            (e.PRIV = "PRIV"),
              (e.TXXX = "TXXX"),
              (e.STREAM_LEVEL_SERVER_TIME = "X-SERVER-TIME");
          })(Ze || (Ze = {}));
        var et,
          tt = (function (e) {
            function t(t, i) {
              var n;
              ((n = e.call(this, i, t) || this).fps = void 0),
                (n.intervalId = void 0),
                (n.bufferingTimeoutId = void 0),
                (n.attemptingToPlay = void 0),
                (n.hasPlayedSrc = void 0),
                (n.hasReloadedOnDecodeError = void 0),
                (n.unsubscribersForTrackEvents = void 0),
                (n.latencyStatistics = void 0),
                (n.processedInitialCues = void 0),
                (n.fps = 0),
                (n.intervalId = -1),
                (n.bufferingTimeoutId = -1),
                (n.attemptingToPlay = !1),
                (n.hasPlayedSrc = !1),
                (n.hasReloadedOnDecodeError = !1),
                (n.unsubscribersForTrackEvents = []),
                (n.latencyStatistics = new ze()),
                (n.processedInitialCues = !1),
                n.addListener(
                  "waiting",
                  function () {
                    return n.onVideoWaiting();
                  },
                  n.video
                ),
                n.addListener(
                  "timeupdate",
                  function () {
                    return n.onVideoTimeUpdate();
                  },
                  n.video
                ),
                n.addListener(
                  "durationchange",
                  function () {
                    return n.onVideoDurationChange();
                  },
                  n.video
                ),
                n.addListener(
                  "error",
                  function () {
                    return n.onVideoError();
                  },
                  n.video
                ),
                n.addListener(
                  "play",
                  function () {
                    return n.onVideoPlay();
                  },
                  n.video
                ),
                n.addListener(
                  "pause",
                  function () {
                    return n.onVideoPause();
                  },
                  n.video
                ),
                n.addListener(
                  "ended",
                  function () {
                    return n.onVideoEnded();
                  },
                  n.video
                ),
                n.addListener(
                  "playing",
                  function () {
                    return n.onVideoPlaying();
                  },
                  n.video
                );
              var r = l(document).visibilityChange;
              return (
                n.addListener(
                  r,
                  function () {
                    return n.onVisibilityChange();
                  },
                  document
                ),
                n
              );
            }
            Oe()(t, e);
            var i = t.prototype;
            return (
              (i.invoke = function (e) {
                this[e.name].call(this, e.arg);
              }),
              (i.configure = function (e) {
                var t = e.path;
                this.handleTrackEvents(),
                  (this.hasReloadedOnDecodeError = !1),
                  (this.hasPlayedSrc = !1),
                  (this.video.src = t);
              }),
              (i.play = function () {
                var e = this,
                  t = this.video.buffered;
                if (t.length > 0) {
                  var i = t.start(t.length - 1),
                    n = t.end(t.length - 1);
                  this.video.duration === 1 / 0 &&
                    (n < this.video.currentTime ||
                      this.video.currentTime < i) &&
                    (this.listener.onSinkGapJump(i - this.video.currentTime),
                    console.warn("Moving to buffered region"),
                    (this.video.currentTime = i));
                }
                (this.paused = !1),
                  (this.attemptingToPlay = !0),
                  Promise.resolve(this.video.play())
                    .then(function () {
                      (e.attemptingToPlay = !1), (e.hasPlayedSrc = !0);
                    })
                    .catch(function () {
                      (e.attemptingToPlay = !1), e.checkStopped(!0);
                    });
              }),
              (i.pause = function () {
                e.prototype.pause.call(this), clearTimeout(this.intervalId);
              }),
              (i.seekTo = function (e) {
                this.video.currentTime = e;
              }),
              (i.setVolume = function (e) {
                this.video.volume = e;
              }),
              (i.getVolume = function () {
                return this.video.volume;
              }),
              (i.buffered = function () {
                return T(this.video.buffered, this.video.currentTime, m);
              }),
              (i.decodedFrames = function () {
                return k(this.video);
              }),
              (i.droppedFrames = function () {
                return S(this.video);
              }),
              (i.framerate = function () {
                return this.fps;
              }),
              (i.delete = function () {
                e.prototype.delete.call(this),
                  this.removeTrackListeners(),
                  (this.video.src = ""),
                  this.video.load();
              }),
              (i.isMuted = function () {
                return this.video.muted;
              }),
              (i.setMuted = function (e) {
                this.video.muted = e;
              }),
              (i.getDisplayWidth = function () {
                return this.video.clientWidth;
              }),
              (i.getDisplayHeight = function () {
                return this.video.clientHeight;
              }),
              (i.getPlaybackRate = function () {
                return this.video.playbackRate;
              }),
              (i.getCurrentTime = function () {
                return this.video.currentTime;
              }),
              (i.bufferDuration = function () {
                var e = this.buffered(),
                  t = e.start;
                return e.end - Math.max(t, this.video.currentTime);
              }),
              (i.captureGesture = function () {
                Promise.resolve(this.video.play()).catch(function () {}),
                  this.video.pause();
              }),
              (i.addTrackListener = function (e, t, i) {
                this.unsubscribersForTrackEvents.push(P(i, e, t));
              }),
              (i.removeTrackListeners = function () {
                this.unsubscribersForTrackEvents.forEach(function (e) {
                  return e();
                });
              }),
              (i.checkTracksStatus = function () {
                for (var e = this.video.textTracks, t = 0; t < e.length; t++) {
                  var i = e[t];
                  "metadata" === i.kind &&
                    "disabled" === i.mode &&
                    (i.mode = "hidden");
                }
              }),
              (i.handleTXXXSegmentDataReceived = function (e) {
                var t = (function (e) {
                  var t = c(e);
                  if ("transc_r" in t)
                    return { transc_r: parseInt(t.transc_r) };
                })(e);
                void 0 !== t &&
                  this.latencyStatistics.tryUpdateLatency(t.transc_r) &&
                  this.listener.onPassthroughSinkPropertyChanged(
                    "liveLatency",
                    this.latencyStatistics.liveLatency
                  );
              }),
              (i.handleInitialCues = function (e) {
                for (var t, i = 0; i < e.length; ++i) {
                  var n = e[i];
                  n.type === Je.APPLE_HLS &&
                    n.value.key === Ze.STREAM_LEVEL_SERVER_TIME &&
                    (t = $e(n.value.data));
                }
                (this.processedInitialCues = !0),
                  void 0 !== t &&
                    this.latencyStatistics.tryGenerateServerOffset(t);
              }),
              (i.shouldPropagateCue = function (e) {
                var t = e.type,
                  i = e.value;
                return !(
                  t !== Je.ID3 ||
                  !i ||
                  !(
                    (i.key === Ze.TXXX && "segmentmetadata" !== i.info) ||
                    (i.key === Ze.PRIV && i.info === Q.METADATA_ID) ||
                    (i.key === Ze.PRIV && i.info === Q.INBAND_METADATA_ID)
                  )
                );
              }),
              (i.handleCueChange = function (e) {
                var t = this,
                  i = new Set();
                this.addTrackListener(
                  "cuechange",
                  function () {
                    var n;
                    !t.processedInitialCues &&
                      e.cues &&
                      t.handleInitialCues(e.cues);
                    var r = null != (n = e.activeCues) ? n : [];
                    if (r.length > 0) {
                      for (var o = new Set(), s = 0; s < r.length; ++s) {
                        var a = r[s];
                        if (!i.has(a)) {
                          a.type;
                          var u = a.value;
                          if (
                            (u.key === Ze.TXXX &&
                              "segmentmetadata" === u.info &&
                              t.handleTXXXSegmentDataReceived(u.data),
                            t.shouldPropagateCue(a))
                          ) {
                            var c =
                                u.key === Ze.PRIV
                                  ? new TextDecoder("utf-8").decode(u.data)
                                  : u.data || "",
                              d = u.info || "";
                            t.listener.onPassthroughSinkMetadata(
                              a.startTime,
                              a.endTime,
                              c,
                              d,
                              d
                            );
                          }
                        }
                        o.add(a);
                      }
                      i = o;
                    }
                  },
                  e
                );
              }),
              (i.handleTrackEvents = function () {
                var e = this;
                this.removeTrackListeners(),
                  (void 0 === window.DataCue &&
                    void 0 === window.WebKitDataCue) ||
                    (this.addTrackListener(
                      "change",
                      function () {
                        e.checkTracksStatus();
                      },
                      this.video.textTracks
                    ),
                    this.addTrackListener(
                      "addtrack",
                      function (t) {
                        var i = t.track;
                        "metadata" === i.kind &&
                          "disabled" === i.mode &&
                          ((i.mode = "hidden"), e.handleCueChange(i));
                      },
                      this.video.textTracks
                    ));
              }),
              (i.onVideoWaiting = function () {
                var e = this;
                if (
                  T(this.video.buffered, this.video.currentTime, m).end -
                    this.video.currentTime <
                  m
                ) {
                  this.listener.onSinkIdle(),
                    clearTimeout(this.bufferingTimeoutId),
                    (this.bufferingTimeoutId = self.setTimeout(function () {
                      e.listener.onSinkError({
                        value: a,
                        code: a,
                        message: "Buffering timeout",
                      });
                    }, g));
                  var t = P(this.video, "timeupdate", function () {
                    t(), clearTimeout(e.bufferingTimeoutId);
                  });
                }
                var i = P(this.video, "timeupdate", function () {
                  4 === e.video.readyState && (i(), e.onVideoPlaying());
                });
              }),
              (i.onVideoTimeUpdate = function () {
                var e = this.listener,
                  t = this.video;
                e.onSinkTimeUpdate(),
                  e.onSinkVideoDisplaySizeChanged(
                    t.clientWidth * self.devicePixelRatio,
                    t.clientHeight * self.devicePixelRatio
                  );
              }),
              (i.onVideoDurationChange = function () {
                this.listener.onSinkDurationChanged(this.video.duration);
              }),
              (i.onVideoError = function () {
                var e = this.video.error,
                  t = e.code,
                  i = e.message,
                  n = void 0 === i ? "" : i,
                  r = -1 !== this.video.src.indexOf(".m3u8");
                if (4 === t && !this.hasPlayedSrc && r)
                  return (
                    clearTimeout(this.bufferingTimeoutId),
                    void this.listener.onSinkError({
                      value: 404,
                      code: 404,
                      message: n,
                    })
                  );
                3 !== t || this.hasReloadedOnDecodeError
                  ? this.listener.onSinkError({ value: t, code: t, message: n })
                  : this.hasReloadedOnDecodeError ||
                    ((this.hasReloadedOnDecodeError = !0),
                    console.warn("Reload video element on MEDIA_ERR_DECODE 3"),
                    this.video.load());
              }),
              (i.onVideoPlay = function () {
                var e = this,
                  t = this.video.currentTime;
                clearTimeout(this.intervalId),
                  (this.intervalId = self.setTimeout(function () {
                    return e.heartbeat(t);
                  }, y));
              }),
              (i.onVideoPause = function () {
                clearTimeout(this.intervalId),
                  this.attemptingToPlay || this.checkStopped(!1);
              }),
              (i.onVideoEnded = function () {
                this.listener.onSinkEnded();
              }),
              (i.onVideoPlaying = function () {
                this.listener.onSinkPlaying(this.paused),
                  this.trackFPS(k(this.video), performance.now()),
                  this.trackBufferUpdate(
                    T(this.video.buffered, this.video.currentTime, m).end
                  );
              }),
              (i.onVisibilityChange = function () {
                var e = l(document).hidden;
                document[e] && (this.hasReloadedOnDecodeError = !1);
              }),
              (i.heartbeat = function (e) {
                var t,
                  i,
                  n,
                  r = this,
                  o = this.video.currentTime;
                if (o === e) {
                  if (
                    ((n =
                      T((t = this.video).buffered, t.currentTime, 0.1).end -
                      (i = t.currentTime)),
                    !(t.ended || t.duration - i < 0.1) && n < 0.1)
                  )
                    return void this.listener.onSinkIdle();
                  var s = C(this.video.buffered, o, m);
                  s !== o &&
                    (console.warn("jumping " + (s - o) + "s gap"),
                    this.listener.onSinkGapJump(s - this.video.currentTime),
                    (this.video.currentTime = s),
                    (o = this.video.currentTime));
                }
                this.intervalId = self.setTimeout(function () {
                  return r.heartbeat(o);
                }, y);
              }),
              (i.trackFPS = function (e, t) {
                var i = this,
                  n = k(this.video),
                  r = performance.now();
                this.fps = ((n - e) / (r - t)) * 1e3;
                var o = P(this.video, "timeupdate", function () {
                  o(), i.trackFPS(n, r);
                });
              }),
              (i.trackBufferUpdate = function (e) {
                var t = this,
                  i = this.buffered().end;
                i !== e && this.listener.onSinkBufferUpdate();
                var n = P(this.video, "timeupdate", function () {
                  n(), t.trackBufferUpdate(i);
                });
              }),
              t
            );
          })(Ke),
          it = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              Oe()(t, e),
              (t.prototype.onIdle = function () {
                this.onSinkIdle
                  ? this.onSinkIdle()
                  : this.listener.onSinkIdle();
              }),
              t
            );
          })(Qe),
          nt = (function (e) {
            function t(t, i, n) {
              var r;
              return (
                ((r = e.call(this, t, i, new it(i, t)) || this).listener = t),
                (r.video = i),
                (r.adjustments = n),
                r
              );
            }
            Oe()(t, e);
            var i = t.prototype;
            return (
              (i.configure = function (e) {
                var t = e.trackID,
                  i = e.codec,
                  n = e.group,
                  r = e.isProtected;
                if (
                  (this.initSink(),
                  this.isContentProtectionChanging(r) && this.queueNewSink(),
                  this.isNewSinkNeeded(e))
                ) {
                  this.queueNewSink();
                  var o = this.getTrack(E.audio);
                  o && this.invoke({ name: "addTrack", arg: o });
                }
                this.invoke({
                  name: "addTrack",
                  arg: B()({}, rt, {
                    trackID: t,
                    codec: i,
                    group: n,
                    isProtected: r,
                  }),
                });
              }),
              (i.queueNewSink = function () {
                var e = this;
                this.awaitSink = new Promise(function (t, i) {
                  e.deferUntilIdle()
                    .then(function () {
                      var t = D.create(
                        e.onMediaSourceEnded.bind(e),
                        e.onMediaSourceError.bind(e)
                      );
                      return e.changeSrc(URL.createObjectURL(t.ms)), t.sink;
                    })
                    .then(function (i) {
                      e.invokeAsync({ name: "play", arg: void 0 }),
                        e.destroyMSESink(),
                        e.handleCreateSuccess(i),
                        t();
                    })
                    .catch(function (t) {
                      e.handleCreateError(t), i();
                    });
                });
              }),
              (i.deferUntilIdle = function () {
                var e = this,
                  t = this.mseSink,
                  i = this.playbackMonitor;
                return new Promise(function (n) {
                  t && !e.video.paused
                    ? ((i.onSinkIdle = function () {}),
                      e.video.addEventListener(
                        "waiting",
                        function () {
                          (i.onSinkIdle = void 0), n();
                        },
                        { once: !0 }
                      ))
                    : n();
                });
              }),
              (i.onSegmentDiscontinuity = function () {
                var e = this.adjustments,
                  t = this.awaitSink,
                  i = this.mseSink;
                e.rebuildMediaSinkOnDiscontinuity &&
                  i &&
                  !t &&
                  this.queueNewSink();
              }),
              (i.isSinkVideoSourceQualityChangeRequired = function (e, t) {
                return (
                  !!this.adjustments.rebuildMediaSinkOnSourceQualityChange &&
                  ("chunked" === e) != ("chunked" === t)
                );
              }),
              (i.isNewSinkNeeded = function (e) {
                var t = this.adjustments,
                  i = this.mseSink,
                  n = this.awaitSink;
                if (e.trackID !== E.video) return !1;
                if (!t.rebuildMediaSinkOnSourceQualityChange) return !1;
                if (!i || n) return !1;
                var r = this.getTrack(E.video),
                  o = this.getTrack(E.audio);
                return (
                  !(!r || !o) &&
                  this.isSinkVideoSourceQualityChangeRequired(r.group, e.group)
                );
              }),
              (i.getTrack = function (e) {
                var t,
                  i = this.mseSink;
                return null !=
                  (t =
                    null == i
                      ? void 0
                      : i.bufferProperties.find(function (t) {
                          return t.trackID === e;
                        }))
                  ? t
                  : null;
              }),
              t
            );
          })(Ye),
          rt = {
            trackID: 0,
            codec: "",
            mode: "mse",
            isProtected: !1,
            path: "",
            group: "",
            srcObj: null,
          },
          ot = (function () {
            function e(e, t, i, n) {
              (this.listener = e),
                (this.adjustments = i),
                (this.video = void 0),
                (this.drmManager = void 0),
                (this.codecs = void 0),
                (this.sink = void 0),
                (this.observer = void 0),
                (this.remoteDevicesListener = void 0),
                (this.video = n || document.createElement("video")),
                (this.listener = e),
                (this.drmManager = new _e({ video: this.video, listener: e })),
                (this.codecs = Object.create(null)),
                (this.sink = new Be(this.video)),
                t &&
                  (this.remoteDevicesListener = Ue.lookForRemotePlaybackDevices(
                    this.listener
                  )),
                (this.observer = new xe(this.video, e));
            }
            var t = e.prototype;
            return (
              (t.delete = function () {
                var e;
                this.reset(),
                  null == (e = this.remoteDevicesListener) ||
                    e.then(function (e) {
                      e && Ue.stopLookingForRemotePlaybackDevices(e);
                    });
              }),
              (t.configure = function (e) {
                var t = e.mode,
                  i = e.codec,
                  n = e.trackID;
                this.sink instanceof Be && (this.sink = this.getSink(t)),
                  i ? (this.codecs[n] = i) : (e.codec = this.codecs[n]),
                  this.sink.configure(e);
                var r = e.path,
                  o = e.isProtected;
                r && o && this.drmManager.configure(r),
                  this.observer.onConfigure();
              }),
              (t.applyRPC = function (e) {
                this.observer.trackRPC(e), this.sink.invoke(e);
              }),
              (t.getCurrentSink = function () {
                return this.sink;
              }),
              (t.reset = function () {
                this.sink.delete(),
                  this.drmManager.reset(),
                  (this.sink = new Be(this.video)),
                  this.listener.onSinkTimeUpdate(),
                  this.listener.onSinkBufferUpdate();
              }),
              (t.videoElement = function () {
                return this.video;
              }),
              (t.isProtected = function () {
                return this.drmManager.isProtected();
              }),
              (t.captureGesture = function () {
                this.video.played.length || this.sink.captureGesture();
              }),
              (t.destroy = function () {
                this.observer.unsubscribe(), this.delete();
              }),
              (t.isLowLatencyCapable = function () {
                return this.sink instanceof Ye;
              }),
              (t.onSegmentDiscontinuity = function () {
                this.sink.onSegmentDiscontinuity();
              }),
              (t.getSink = function (e) {
                switch (e) {
                  case "chromecast":
                    return new Ue(this.listener);
                  case "mse-worker":
                    return new qe(this.listener, this.video);
                  case "passthrough":
                    return new tt(this.listener, this.video);
                  case "webview":
                    return new nt(this.listener, this.video, this.adjustments);
                  default:
                    return new Ye(this.listener, this.video);
                }
              }),
              e
            );
          })(),
          st = i(717187),
          at = (function () {
            function e() {
              (this.emitter = void 0), (this.emitter = new st.EventEmitter());
            }
            var t = e.prototype;
            return (
              (t.on = function (e, t) {
                this.emitter.on(String(e), t);
              }),
              (t.removeListener = function (e, t) {
                this.emitter.removeListener(String(e), t);
              }),
              (t.emit = function (e) {
                for (
                  var t,
                    i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                (t = this.emitter).emit.apply(t, [String(e)].concat(n));
              }),
              (t.removeAllListeners = function () {
                this.emitter.removeAllListeners();
              }),
              e
            );
          })();
        !(function (e) {
          (e[(e.STATE_CHANGED = 0)] = "STATE_CHANGED"),
            (e[(e.CONFIGURE = 1)] = "CONFIGURE"),
            (e[(e.RESET = 2)] = "RESET"),
            (e[(e.ADD_CUE = 3)] = "ADD_CUE"),
            (e[(e.GET_DECODE_INFO = 4)] = "GET_DECODE_INFO"),
            (e[(e.MEDIA_SINK_RPC = 5)] = "MEDIA_SINK_RPC"),
            (e[(e.GET_EXPERIMENTS = 6)] = "GET_EXPERIMENTS"),
            (e[(e.LOG_MESSAGE = 7)] = "LOG_MESSAGE"),
            (e[(e.DATA_CHANNEL_CREATE = 8)] = "DATA_CHANNEL_CREATE"),
            (e[(e.DATA_CHANNEL_CLOSE = 9)] = "DATA_CHANNEL_CLOSE"),
            (e[(e.DATA_CHANNEL_SEND = 10)] = "DATA_CHANNEL_SEND"),
            (e[(e.RTC_SET_REMOTE_DESCRIPTION = 11)] =
              "RTC_SET_REMOTE_DESCRIPTION"),
            (e[(e.PROPERTY_CHANGED = 12)] = "PROPERTY_CHANGED"),
            (e[(e.BUFFERED_RANGES = 13)] = "BUFFERED_RANGES"),
            (e[(e.DESTROY = 14)] = "DESTROY");
        })(et || (et = {}));
        var ut = {
            rebuildMediaSinkOnSourceQualityChange: !1,
            rebuildMediaSinkOnDiscontinuity: !1,
            abrTranscodesOnly: !1,
          },
          ct = (function () {
            function e(t, i) {
              var n,
                r,
                o = this;
              (this.worker = void 0),
                (this.id = void 0),
                (this.emitter = void 0),
                (this.seekTime = void 0),
                (this.paused = void 0),
                (this.isLoaded = void 0),
                (this.autoPlayOptions = void 0),
                (this.mediaSinkManager = void 0),
                (this.experiments = void 0),
                (this.adjustments = void 0),
                (this.enableRemoteSearch = void 0),
                (this.isQualitySupported = void 0),
                (this.onvisibilitychange = void 0),
                (this.onmessage = void 0),
                (this.onOnline = void 0),
                (this.onOffline = void 0),
                (this.pauseHiddenSilentTab = void 0),
                (this.state = void 0),
                (this.workerMessageProcessors = void 0),
                (this.startCapture = void 0),
                (this.stopCapture = void 0),
                (this.requestCaptureAnalytics = void 0),
                (this.worker = i),
                (this.id = e.instanceId++),
                (this.emitter = new at()),
                (this.seekTime = null),
                (this.paused = !0),
                (this.isLoaded = !1),
                (this.autoPlayOptions = null),
                (this.isQualitySupported = t.isQualitySupported || h),
                (this.onvisibilitychange = function () {
                  return o.onVisibilityChange();
                }),
                (this.onmessage = function (e) {
                  return o.onWorkerMessage(e);
                }),
                (this.onOnline = function () {
                  return o.postMessage("onOnline");
                }),
                (this.onOffline = function () {
                  return o.postMessage("onOffline");
                }),
                (this.enableRemoteSearch = t.enableRemoteSearch || !1);
              var s,
                a = N();
              if (
                ((this.pauseHiddenSilentTab =
                  (a.chrome && 63 === a.major) || a.opera),
                (this.adjustments =
                  ((s =
                    null !=
                    (n = null == (r = t.webviewHost) ? void 0 : r.adjustments)
                      ? n
                      : {}),
                  B()({}, ut, s))),
                (this.mediaSinkManager = new ot(
                  this,
                  this.enableRemoteSearch,
                  this.adjustments
                )),
                (this.experiments = {}),
                (this.workerMessageProcessors = [H]),
                G.isSupported())
              ) {
                var u = new G();
                this.workerMessageProcessors.push(u.processor);
              }
              (this.state = {
                averageBitrate: 0,
                bandwidthEstimate: 0,
                looping: !1,
                autoQualityMode: !0,
                volume: 1,
                liveLatency: 0,
                liveLowLatencyEnabled: !0,
                liveLowLatency: !1,
                statistics: {},
              }),
                this.resetState(),
                this.attachHandlers(),
                this.postMessage("create", [
                  {
                    mseSupported: j(),
                    keySystem: void 0 !== t.keySystem ? t.keySystem : fe(a),
                    browserContext: B()({}, a, { webviewHost: t.webviewHost }),
                    codecs: e.isVP9Supported() ? ["vp09"] : [],
                    testOnly: t.testOnly,
                    playerFramework: t.playerFramework,
                    buildDistId: "npm",
                  },
                ]);
            }
            e.isVP9Supported = function () {
              return (
                j() &&
                MediaSource.isTypeSupported('video/mp4;codecs="vp09.00.10.08"')
              );
            };
            var t = e.prototype;
            return (
              (t.delete = function () {
                var e = this,
                  t = l(document).visibilityChange;
                document.removeEventListener(t, this.onvisibilitychange),
                  window.removeEventListener("online", this.onOnline),
                  window.removeEventListener("offline", this.onOffline),
                  this.emitter.removeAllListeners(),
                  this.emitter.on(et.DESTROY, function () {
                    e.mediaSinkManager.destroy(),
                      e.emitter.removeAllListeners(),
                      e.worker.removeEventListener("message", e.onmessage);
                  }),
                  this.postMessage("delete");
              }),
              (t.attachHTMLVideoElement = function (e) {
                this.mediaSinkManager && this.mediaSinkManager.destroy(),
                  (this.mediaSinkManager = new ot(
                    this,
                    this.enableRemoteSearch,
                    this.adjustments,
                    e
                  )),
                  this.processVideoElementAttributes(e);
              }),
              (t.getHTMLVideoElement = function () {
                return this.mediaSinkManager.videoElement();
              }),
              (t.load = function (e, t) {
                void 0 === t && (t = ""),
                  this.postMessage("load", [e, t]),
                  this.autoPlayOptions && this.postMessage("playIntent");
              }),
              (t.play = function () {
                this.postMessage("playIntent"),
                  this.mediaSinkManager.captureGesture(),
                  (this.paused = !1),
                  this.attemptPlay();
              }),
              (t.setAutoplay = function (e) {
                this.autoPlayOptions = e ? { attemptMutedRetry: !0 } : null;
              }),
              (t.setAutoPlayOptions = function (e) {
                this.autoPlayOptions = e;
              }),
              (t.getExperiments = function () {
                return this.experiments;
              }),
              (t.setExperiment = function (e, t) {
                this.setExperimentData({
                  id: e,
                  assignment: t,
                  version: 0,
                  type: "",
                });
              }),
              (t.setExperimentData = function (e) {
                this.postMessage("setExperiment", [e]);
              }),
              (t.pause = function () {
                (this.paused = !0), this.postMessage("pause");
              }),
              (t.isPaused = function () {
                return this.paused;
              }),
              (t.seekTo = function (e) {
                (this.seekTime = e), this.postMessage("seekTo", [e]);
              }),
              (t.isSeeking = function () {
                return null !== this.seekTime;
              }),
              (t.isAutoplay = function () {
                return !!this.autoPlayOptions;
              }),
              (t.getDuration = function () {
                return this.state.duration;
              }),
              (t.getStartOffset = function () {
                return this.state.startOffset || 0;
              }),
              (t.getPosition = function () {
                return null === this.seekTime
                  ? this.mediaSinkManager.getCurrentSink().getCurrentTime()
                  : this.seekTime;
              }),
              (t.getBuffered = function () {
                return this.mediaSinkManager.getCurrentSink().buffered();
              }),
              (t.getBufferedRanges = function () {
                return (
                  this.postMessage("updateBufferedRanges", []),
                  this.state.trackBufferedRanges
                );
              }),
              (t.getSinkBufferedRanges = function () {
                var e = this.mediaSinkManager.getCurrentSink();
                return {
                  audio: e.getBufferedRanges("audio"),
                  video: e.getBufferedRanges("video"),
                };
              }),
              (t.getBufferDuration = function () {
                return this.state.bufferedPosition - this.getPosition();
              }),
              (t.getState = function () {
                return this.state.state;
              }),
              (t.getVideoWidth = function () {
                return this.mediaSinkManager.videoElement().videoWidth;
              }),
              (t.getVideoHeight = function () {
                return this.mediaSinkManager.videoElement().videoHeight;
              }),
              (t.getVideoFrameRate = function () {
                return this.state.statistics.framerate;
              }),
              (t.getVideoBitRate = function () {
                return this.state.statistics.bitrate;
              }),
              (t.getAverageBitrate = function () {
                return this.state.averageBitrate;
              }),
              (t.getBandwidthEstimate = function () {
                return this.state.bandwidthEstimate;
              }),
              (t.getPath = function () {
                return this.state.path;
              }),
              (t.getProtocol = function () {
                return this.state.protocol;
              }),
              (t.getVersion = function () {
                return "1.19.0-twitch.3-rc.1";
              }),
              (t.isLiveLowLatency = function () {
                return (
                  this.state.liveLowLatencyEnabled && this.state.liveLowLatency
                );
              }),
              (t.isLooping = function () {
                return this.state.looping;
              }),
              (t.setLogLevel = function (e) {
                this.postMessage("setLogLevel", [e]);
              }),
              (t.setLooping = function (e) {
                (this.state.looping = e), this.postMessage("setLooping", [e]);
              }),
              (t.isMuted = function () {
                return this.mediaSinkManager.getCurrentSink().isMuted();
              }),
              (t.setMuted = function (e) {
                this.mediaSinkManager.getCurrentSink().setMuted(e);
              }),
              (t.setVolume = function (e) {
                (this.state.volume = e),
                  this.postMessage("setVolume", [this.state.volume]);
              }),
              (t.getVolume = function () {
                return this.state.volume;
              }),
              (t.getQuality = function () {
                return this.state.quality;
              }),
              (t.setQuality = function (e, t) {
                void 0 === t && (t = !1),
                  this.mediaSinkManager.videoElement().controls ||
                    (this.postMessage("setQuality", [e, t]),
                    (this.state.autoQualityMode = !1));
              }),
              (t.getQualities = function () {
                return this.state.qualities;
              }),
              (t.setAuthToken = function (e) {
                this.postMessage("setAuthToken", [e]);
              }),
              (t.isAutoQualityMode = function () {
                return this.state.autoQualityMode;
              }),
              (t.setAutoQualityMode = function (e) {
                (this.state.autoQualityMode = e),
                  this.postMessage("setAutoQualityMode", [e]);
              }),
              (t.setAutoInitialBitrate = function (e) {
                this.postMessage("setAutoInitialBitrate", [e]);
              }),
              (t.setAutoMaxQuality = function (e) {
                this.postMessage("setAutoMaxQuality", [e]);
              }),
              (t.setAutoMaxBitrate = function (e) {
                this.postMessage("setAutoMaxBitrate", [e]);
              }),
              (t.setAutoMaxVideoSize = function (e, t) {
                this.postMessage("setAutoMaxVideoSize", [e, t]);
              }),
              (t.setAutoViewportSize = function (e, t) {
                this.postMessage("setAutoViewportSize", [e, t]);
              }),
              (t.getPlaybackRate = function () {
                return this.mediaSinkManager.getCurrentSink().getPlaybackRate();
              }),
              (t.setPlaybackRate = function (e) {
                return this.mediaSinkManager
                  .getCurrentSink()
                  .setPlaybackRate(e);
              }),
              (t.setClientId = function (e) {
                this.postMessage("setClientId", [e]);
              }),
              (t.setDeviceId = function (e) {
                this.postMessage("setDeviceId", [e]);
              }),
              (t.setLiveSpeedUpRate = function (e) {
                this.postMessage("setLiveSpeedUpRate", [e]);
              }),
              (t.setPlayerType = function (e) {
                this.postMessage("setPlayerType", [e]);
              }),
              (t.setLiveMaxLatency = function (e) {
                this.postMessage("setLiveMaxLatency", [e]);
              }),
              (t.setLiveLowLatencyEnabled = function (e) {
                (this.state.liveLowLatencyEnabled = e),
                  this.postMessage("setLiveLowLatencyEnabled", [e]);
              }),
              (t.setRebufferToLive = function (e) {
                this.postMessage("setRebufferToLive", [e]);
              }),
              (t.setVisible = function (e) {
                this.postMessage("setVisible", [e]);
              }),
              (t.setInitialBufferDuration = function (e) {
                this.postMessage("setInitialBufferDuration", [e]);
              }),
              (t.addEventListener = function (e, t) {
                this.emitter.on(e, t);
              }),
              (t.removeEventListener = function (e, t) {
                this.emitter.removeListener(e, t);
              }),
              (t.getDroppedFrames = function () {
                return this.state.statistics.droppedFrames;
              }),
              (t.getDecodedFrames = function () {
                return this.state.statistics.decodedFrames;
              }),
              (t.getDisplayWidth = function () {
                return this.mediaSinkManager.getCurrentSink().getDisplayWidth();
              }),
              (t.getDisplayHeight = function () {
                return this.mediaSinkManager
                  .getCurrentSink()
                  .getDisplayHeight();
              }),
              (t.getSessionId = function () {
                return this.state.sessionId;
              }),
              (t.getSessionData = function () {
                return this.state.sessionData;
              }),
              (t.getLiveLatency = function () {
                return this.state.liveLatency;
              }),
              (t.isProtected = function () {
                return this.mediaSinkManager.isProtected();
              }),
              (t.startRemotePlayback = function () {
                this.postMessage("startRemotePlayback");
              }),
              (t.endRemotePlayback = function () {
                this.postMessage("endRemotePlayback");
              }),
              (t.setPlatformName = function (e) {
                this.postMessage("setPlatformName", [e]);
              }),
              (t.setRequestCredentials = function (e) {
                this.postMessage("setRequestCredentials", [e]);
              }),
              (t.setSinkType = function (e) {
                this.postMessage("setSinkType", [e]);
              }),
              (t.onSinkTimeUpdate = function () {
                var e = this.mediaSinkManager.getCurrentSink();
                null === this.seekTime &&
                  (this.postMessage("onClientSinkUpdate", [
                    {
                      currentTime: e.getCurrentTime(),
                      decodedFrames: e.decodedFrames(),
                      droppedFrames: e.droppedFrames(),
                      framerate: e.framerate(),
                      bufferDuration: e.bufferDuration(),
                      displayHeight: e.getDisplayHeight(),
                      displayWidth: e.getDisplayWidth(),
                    },
                  ]),
                  this.emitter.emit(V.TIME_UPDATE, e.getCurrentTime()));
              }),
              (t.onSinkBufferUpdate = function () {
                this.emitter.emit(V.BUFFER_UPDATE);
              }),
              (t.onSinkDurationChanged = function (e) {
                this.postMessage("onClientSinkDurationChanged", [e]);
              }),
              (t.onSinkEnded = function () {
                this.postMessage("onClientSinkEnded");
              }),
              (t.onSinkIdle = function () {
                this.postMessage("onClientSinkIdle");
              }),
              (t.onSinkPlaying = function (e) {
                this.postMessage("onClientSinkPlaying"), e && this.play();
              }),
              (t.onSinkStop = function (e) {
                var t,
                  i,
                  n = l(document).hidden;
                if (document[n]) this.postMessage("pause");
                else if (e) {
                  if (
                    !this.isMuted() &&
                    (null ==
                      (t =
                        null == (i = this.autoPlayOptions)
                          ? void 0
                          : i.attemptMutedRetry) ||
                      t)
                  )
                    return (
                      this.setMuted(!0),
                      this.mediaSinkManager.getCurrentSink().play(),
                      void this.emitter.emit(V.AUDIO_BLOCKED)
                    );
                  this.pause(), this.emitter.emit(V.PLAYBACK_BLOCKED);
                } else this.pause();
              }),
              (t.onSinkReset = function () {
                this.postMessage("onClientSinkReset");
              }),
              (t.onSinkError = function (e) {
                var t = e.value,
                  i = e.code,
                  n = e.message;
                this.postMessage("onClientSinkError", [t, i, n]);
              }),
              (t.onSinkRecoverableError = function (e) {
                var t = e.value,
                  i = e.code,
                  n = e.message;
                this.postMessage("onClientSinkRecoverableError", [t, i, n]);
              }),
              (t.onSinkVideoDisplaySizeChanged = function (e, t) {
                this.setAutoViewportSize(e, t);
              }),
              (t.onSinkVolumeChanged = function (e, t) {
                this.mediaSinkManager.videoElement().controls &&
                  t &&
                  this.setVolume(e),
                  this.emitter.emit(V.VOLUME_CHANGED, this.state.volume);
              }),
              (t.onSinkMutedChanged = function (e) {
                this.postMessage("setMuted", [e]),
                  this.emitter.emit(V.MUTED_CHANGED);
              }),
              (t.onSinkPlaybackRateChanged = function (e) {
                this.postMessage("setPlaybackRate", [e]);
              }),
              (t.onPassthroughSinkMetadata = function (e, t, i, n, r) {
                this.emitter.emit(V.TEXT_METADATA_CUE, {
                  description: n,
                  endTime: t,
                  startTime: e,
                  text: i,
                  owner: r,
                  type: "TextMetadataCue",
                });
              }),
              (t.onPassthroughSinkPropertyChanged = function (e, t) {
                (this.state[e] = t),
                  this.postMessage("onClientSinkPassthroughPropertyChanged", [
                    e,
                    t,
                  ]);
              }),
              (t.onSinkControlsChanged = function (e) {
                this.postMessage("setControls", [e]);
              }),
              (t.onSinkGapJump = function (e) {
                this.postMessage("onClientSinkGapJump", [e]);
              }),
              (t.onRemoteDevice = function (e) {
                this.emitter.emit(e ? q.AVAILABLE : q.UNAVAILABLE);
              }),
              (t.onRemoteReconnect = function () {
                this.startRemotePlayback();
              }),
              (t.onSessionError = function () {
                this.postMessage("onClientSinkError", [
                  1,
                  0,
                  "Chromecast session error",
                ]);
              }),
              (t.onLoadMediaError = function () {
                this.postMessage("onClientSinkError", [
                  1,
                  0,
                  "Chromecast load media failed",
                ]);
              }),
              (t.onUserCancel = function () {
                this.endRemotePlayback(), this.emitter.emit(q.SESSION_ENDED);
              }),
              (t.onSegmentDiscontinuity = function () {
                this.mediaSinkManager.onSegmentDiscontinuity();
              }),
              (t.onSessionStop = function () {
                this.endRemotePlayback(), this.emitter.emit(q.SESSION_ENDED);
              }),
              (t.onSessionStarted = function (e) {
                this.emitter.emit(q.SESSION_STARTED, e);
              }),
              (t.attemptPlay = function () {
                var e = l(document).hidden;
                !document[e] && this.isLoaded && this.postMessage("play");
              }),
              (t.postMessage = function (e, t, i) {
                void 0 === i && (i = []),
                  this.worker.postMessage(
                    { id: this.id, funcName: e, args: t },
                    i
                  );
              }),
              (t.resetState = function () {
                d(this.state, {
                  state: Y.IDLE,
                  quality: {
                    name: "",
                    group: "",
                    codecs: "",
                    bitrate: 0,
                    width: 0,
                    height: 0,
                    framerate: 0,
                  },
                  qualities: [],
                  duration: 0,
                  startOffset: 0,
                  sessionData: {},
                  volume: 1,
                  statistics: {
                    bitrate: 0,
                    framerate: 0,
                    droppedFrames: 0,
                    decodeFrames: 0,
                    renderedFrames: 0,
                  },
                  trackBufferedRanges: { audio: [], video: [] },
                }),
                  this.emitter.emit(V.DURATION_CHANGED, 0),
                  (this.seekTime = null),
                  (this.isLoaded = !1);
              }),
              (t.attachHandlers = function () {
                var e = this;
                this.worker.addEventListener("message", this.onmessage);
                var t = l(document).visibilityChange;
                document.addEventListener(t, this.onvisibilitychange),
                  window.addEventListener("online", this.onOnline),
                  window.addEventListener("offline", this.onOffline);
                var i = this.emitter;
                i.on(V.VOLUME_CHANGED, function () {
                  return e.onVolumeChanged();
                }),
                  i.on(V.MUTED_CHANGED, function () {
                    return e.onMutedChanged();
                  }),
                  i.on(V.SEEK_COMPLETED, function () {
                    return e.onSeekCompleted();
                  }),
                  i.on(V.ERROR, function () {
                    return e.onError();
                  }),
                  i.on(V.SESSION_DATA, function (t) {
                    return e.onSessionData(t);
                  }),
                  i.on(V.SEGMENT_DISCONTINUITY, function () {
                    return e.onSegmentDiscontinuity();
                  }),
                  i.on(et.STATE_CHANGED, function (t) {
                    return e.onStateChanged(t);
                  }),
                  i.on(et.MEDIA_SINK_RPC, function (t) {
                    return e.mediaSinkManager.applyRPC(t);
                  }),
                  i.on(et.CONFIGURE, function (t) {
                    e.mediaSinkManager.configure(t), e.setSinkType(t.mode);
                  }),
                  i.on(et.RESET, function () {
                    return e.mediaSinkManager.reset();
                  }),
                  i.on(K.ID3, function (t) {
                    return e.onID3(t);
                  }),
                  i.on(et.GET_EXPERIMENTS, function (t) {
                    e.experiments = t;
                  }),
                  i.on(et.PROPERTY_CHANGED, function (t) {
                    var i = t.key,
                      n = t.value;
                    e.state[i] = n;
                  }),
                  i.on(et.BUFFERED_RANGES, function (t) {
                    e.state.trackBufferedRanges = t;
                  }),
                  i.on(et.LOG_MESSAGE, function (e) {
                    var t = e.level,
                      i = e.message;
                    return console[t](i);
                  });
              }),
              (t.onVolumeChanged = function () {
                var e = l(document).hidden;
                this.pauseHiddenSilentTab &&
                  document[e] &&
                  0 === this.getVolume() &&
                  this.postMessage("pause");
              }),
              (t.onMutedChanged = function () {
                var e = l(document).hidden;
                this.pauseHiddenSilentTab &&
                  document[e] &&
                  this.isMuted() &&
                  this.postMessage("pause");
              }),
              (t.onSeekCompleted = function () {
                this.seekTime = null;
              }),
              (t.onError = function () {
                this.paused = !0;
              }),
              (t.onStateChanged = function (e) {
                var t = this;
                switch (e) {
                  case Y.READY:
                    var i = this.isQualitySupported;
                    if (
                      this.adjustments.abrTranscodesOnly &&
                      this.state.qualities.length > 1
                    ) {
                      var n = this.state.qualities
                        .slice()
                        .sort(function (e, t) {
                          return t.bitrate - e.bitrate;
                        });
                      "chunked" !== n[0].group
                        ? (i = function (e) {
                            return (
                              "chunked" !== e.group && t.isQualitySupported(e)
                            );
                          })
                        : this.setAutoMaxQuality(n[1]);
                    }
                    var r = (function (e, t) {
                      var i = [],
                        n = [];
                      return (
                        e.forEach(function (e) {
                          t(e) ? i.push(e) : n.push(e);
                        }),
                        { supported: i, unsupported: n }
                      );
                    })(this.state.qualities, i);
                    (this.state.qualities = r.supported),
                      r.unsupported.forEach(function (e) {
                        return t.postMessage("removeQuality", [e]);
                      }),
                      (this.isLoaded = !0),
                      this.autoPlayOptions && this.play(),
                      this.paused || this.attemptPlay();
                    break;
                  case Y.ENDED:
                    this.paused = !0;
                }
                this.emitter.emit(V.STATE_CHANGED, e), this.emitter.emit(e);
              }),
              (t.onID3 = function (e) {
                var t = this;
                e.forEach(function (e) {
                  if (
                    "TXXX" === e.id &&
                    "segmentmetadata" === e.desc &&
                    e.info.length
                  ) {
                    var i = c(e.info[0]);
                    if (
                      Object.prototype.hasOwnProperty.call(i, "stream_offset")
                    ) {
                      var n = Number(i.stream_offset);
                      isNaN(n) || (t.state.startOffset = n - t.getPosition());
                    }
                  }
                });
              }),
              (t.onVisibilityChange = function () {
                var e = l(document).hidden;
                this.paused || document[e] || this.attemptPlay(),
                  this.pauseHiddenSilentTab &&
                    !this.paused &&
                    document[e] &&
                    (this.isMuted() || 0 === this.getVolume()) &&
                    this.postMessage("pause"),
                  N().firefox || this.postMessage("setVisible", [!document[e]]);
              }),
              (t.onSessionData = function (e) {
                d(this.state, e);
              }),
              (t.onWorkerMessage = function (e) {
                var t = e.data;
                if (t && t.id === this.id) {
                  var i = this.workerMessageProcessors.reduce(function (e, t) {
                      return t(e);
                    }, t),
                    n = i.type,
                    r = i.arg;
                  void 0 !== t.arg
                    ? this.emitter.emit(n, r)
                    : this.emitter.emit(n);
                }
              }),
              (t.processVideoElementAttributes = function (e) {
                if (
                  (e.hasAttribute("autoplay") &&
                    (e.removeAttribute("autoplay"), this.setAutoplay(!0)),
                  e.hasAttribute("playbackRate"))
                ) {
                  var t,
                    i = parseFloat(
                      null != (t = e.getAttribute("playbackRate")) ? t : "1.0"
                    );
                  if (!isNaN(i)) {
                    var n = f(i, 0.25, 2);
                    this.setPlaybackRate(n);
                  }
                  e.removeAttribute("playbackRate");
                }
                if (e.hasAttribute("src")) {
                  var r = e.src;
                  v(e), this.load(r);
                }
                if (
                  (e.hasAttribute("loop") &&
                    (e.removeAttribute("loop"), this.setLooping(!0)),
                  e.hasAttribute("muted") &&
                    (e.removeAttribute("muted"), this.setMuted(!0)),
                  e.hasAttribute("volume"))
                ) {
                  var o,
                    s = parseFloat(
                      null != (o = e.getAttribute("volume")) ? o : "1.0"
                    );
                  isNaN(s) || this.setVolume(f(s, 0, 1)),
                    e.removeAttribute("volume");
                }
              }),
              e
            );
          })();
        ct.instanceId = 0;
        var dt = (function () {
          function e(e) {
            var t = this;
            (this.workerPort = void 0),
              (this.emitter = void 0),
              (this.messageQueue = void 0),
              (this.workerPort = {
                postMessage: this.postMessageFromWorker.bind(this),
                onmessage: function () {},
              }),
              (this.emitter = new st.EventEmitter()),
              (this.messageQueue = new u()),
              this.loadScript(e, function (e) {
                return t.applyWorkerEnv(e);
              });
          }
          var t = e.prototype;
          return (
            (t.postMessage = function (e) {
              this.messageQueue
                ? this.messageQueue.push(e)
                : this.postMessageToWorker(e);
            }),
            (t.addEventListener = function (e, t) {
              this.emitter.on(e, t);
            }),
            (t.removeEventListener = function (e, t) {
              this.emitter.off(e, t);
            }),
            (t.onmessage = function () {}),
            (t.onmessageerror = function () {}),
            (t.onerror = function () {}),
            (t.terminate = function () {}),
            (t.dispatchEvent = function () {
              return !0;
            }),
            (t.loadScript = function (e, t) {
              var i = this,
                n = new XMLHttpRequest();
              n.open("GET", e),
                n.addEventListener("load", function () {
                  n.status >= 200 && n.status < 400
                    ? t(n.response)
                    : i.emitter.emit("error", new Error(n.statusText));
                }),
                n.addEventListener("error", function (e) {
                  i.emitter.emit("error", e);
                }),
                n.send();
            }),
            (t.applyWorkerEnv = function (e) {
              if (this.messageQueue) {
                try {
                  Function(
                    "self",
                    "messageHandler",
                    e
                  )(window, this.workerPort);
                } catch (e) {
                  return void this.emitter.emit("error", e);
                }
                for (; !this.messageQueue.empty(); )
                  this.postMessageToWorker(this.messageQueue.pop());
                this.messageQueue = null;
              }
            }),
            (t.postMessageFromWorker = function (e) {
              var t = this;
              setTimeout(function () {
                t.emitter.emit("message", { data: e });
              }, 0);
            }),
            (t.postMessageToWorker = function (e) {
              var t = this;
              setTimeout(function () {
                t.workerPort.onmessage({ data: e });
              }, 0);
            }),
            e
          );
        })();
        function ht(e, t, i) {
          var n, r, o, s;
          return (
            void 0 === i && (i = !1),
            N().msIE
              ? (n = new dt(e))
              : ((r = e),
                (o = window.location),
                ((s = document.createElement("a")).href = r),
                (n =
                  s.hostname === o.hostname &&
                  s.port === o.port &&
                  s.protocol === o.protocol
                    ? new Worker(e)
                    : new Worker(
                        URL.createObjectURL(
                          new Blob(["importScripts('" + e + "')"])
                        )
                      ))),
            n.postMessage({ wasmBinaryUrl: t, showWorkerLogs: i }),
            n
          );
        }
        var lt =
            "undefined" != typeof window &&
            "object" == typeof window.WebAssembly &&
            "function" == typeof window.WebAssembly.instantiate,
          ft = lt;
        function vt(e) {
          var t = e.asmWorker,
            i = e.wasmWorker,
            n = e.wasmBinary;
          if (!ft && !t)
            throw new Error(
              "WebAssembly is not supported by the browser. This is required for playback."
            );
          var r = ht(ft ? i : t, n, e.showWorkerLog);
          return new Tt(e, r);
        }
        var mt,
          pt,
          gt,
          yt,
          Et,
          kt,
          St,
          bt,
          Tt = (function () {
            function e(e, t) {
              (this.core = void 0),
                (this.startCapture = void 0),
                (this.stopCapture = void 0),
                (this.requestCaptureAnalytics = void 0),
                (this.core = new ct(e, t));
            }
            var t = e.prototype;
            return (
              (t.addEventListener = function (e, t) {
                var i;
                null == (i = this.checkCore()) || i.addEventListener(e, t);
              }),
              (t.attachHTMLVideoElement = function (e) {
                var t;
                null == (t = this.checkCore()) || t.attachHTMLVideoElement(e);
              }),
              (t.delete = function () {
                var e;
                null == (e = this.checkCore()) || e.delete(),
                  (this.core = null);
              }),
              (t.endRemotePlayback = function () {
                var e;
                null == (e = this.checkCore()) || e.endRemotePlayback();
              }),
              (t.isAutoplay = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.isAutoplay();
              }),
              (t.isAutoQualityMode = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.isAutoQualityMode();
              }),
              (t.getAverageBitrate = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getAverageBitrate();
              }),
              (t.getBandwidthEstimate = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getBandwidthEstimate();
              }),
              (t.getBufferDuration = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getBufferDuration();
              }),
              (t.getBuffered = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getBuffered();
              }),
              (t.getBufferedRanges = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getBufferedRanges();
              }),
              (t.getSinkBufferedRanges = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getSinkBufferedRanges();
              }),
              (t.getDecodedFrames = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getDecodedFrames();
              }),
              (t.getDisplayHeight = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getDisplayHeight();
              }),
              (t.getDisplayWidth = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getDisplayWidth();
              }),
              (t.getDroppedFrames = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getDroppedFrames();
              }),
              (t.getDuration = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getDuration();
              }),
              (t.getExperiments = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getExperiments();
              }),
              (t.getHTMLVideoElement = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getHTMLVideoElement();
              }),
              (t.getLiveLatency = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getLiveLatency();
              }),
              (t.getPath = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.getPath();
              }),
              (t.getProtocol = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getProtocol();
              }),
              (t.getPlaybackRate = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getPlaybackRate();
              }),
              (t.getPosition = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getPosition();
              }),
              (t.getQualities = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getQualities();
              }),
              (t.getQuality = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.getQuality();
              }),
              (t.getSessionData = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getSessionData();
              }),
              (t.getSessionId = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getSessionId();
              }),
              (t.getStartOffset = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getStartOffset();
              }),
              (t.getState = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.getState();
              }),
              (t.getVersion = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.getVersion();
              }),
              (t.getVideoBitRate = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getVideoBitRate();
              }),
              (t.getVideoFrameRate = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getVideoFrameRate();
              }),
              (t.getVideoHeight = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getVideoHeight();
              }),
              (t.getVideoWidth = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.getVideoWidth();
              }),
              (t.getVolume = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.getVolume();
              }),
              (t.isLiveLowLatency = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.isLiveLowLatency();
              }),
              (t.isLooping = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.isLooping();
              }),
              (t.isMuted = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.isMuted();
              }),
              (t.isPaused = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.isPaused();
              }),
              (t.isProtected = function () {
                var e;
                return null == (e = this.checkCore())
                  ? void 0
                  : e.isProtected();
              }),
              (t.isSeeking = function () {
                var e;
                return null == (e = this.checkCore()) ? void 0 : e.isSeeking();
              }),
              (t.load = function (e, t) {
                var i;
                return (
                  void 0 === t && (t = ""),
                  null == (i = this.checkCore()) ? void 0 : i.load(e, t)
                );
              }),
              (t.pause = function () {
                var e;
                null == (e = this.checkCore()) || e.pause();
              }),
              (t.play = function () {
                var e;
                null == (e = this.checkCore()) || e.play();
              }),
              (t.removeEventListener = function (e, t) {
                var i;
                null == (i = this.checkCore()) || i.removeEventListener(e, t);
              }),
              (t.seekTo = function (e) {
                var t;
                null == (t = this.checkCore()) || t.seekTo(e);
              }),
              (t.setAuthToken = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setAuthToken(e);
              }),
              (t.setAutoInitialBitrate = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setAutoInitialBitrate(e);
              }),
              (t.setAutoMaxQuality = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setAutoMaxQuality(e);
              }),
              (t.setAutoMaxBitrate = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setAutoMaxBitrate(e);
              }),
              (t.setAutoMaxVideoSize = function (e, t) {
                var i;
                null == (i = this.checkCore()) || i.setAutoMaxVideoSize(e, t);
              }),
              (t.setAutoplay = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setAutoplay(e);
              }),
              (t.setAutoPlayOptions = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setAutoPlayOptions(e);
              }),
              (t.setAutoQualityMode = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setAutoQualityMode(e);
              }),
              (t.setAutoViewportSize = function (e, t) {
                var i;
                null == (i = this.checkCore()) || i.setAutoViewportSize(e, t);
              }),
              (t.setClientId = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setClientId(e);
              }),
              (t.setDeviceId = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setDeviceId(e);
              }),
              (t.setExperiment = function (e, t) {
                var i;
                null == (i = this.checkCore()) || i.setExperiment(e, t);
              }),
              (t.setExperimentData = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setExperimentData(e);
              }),
              (t.setInitialBufferDuration = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setInitialBufferDuration(e);
              }),
              (t.setLiveLowLatencyEnabled = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setLiveLowLatencyEnabled(e);
              }),
              (t.setLiveMaxLatency = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setLiveMaxLatency(e);
              }),
              (t.setLiveSpeedUpRate = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setLiveSpeedUpRate(e);
              }),
              (t.setLogLevel = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setLogLevel(e);
              }),
              (t.setLooping = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setLooping(e);
              }),
              (t.setMuted = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setMuted(e);
              }),
              (t.setPlaybackRate = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setPlaybackRate(e);
              }),
              (t.setPlayerType = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setPlayerType(e);
              }),
              (t.setQuality = function (e, t) {
                var i;
                void 0 === t && (t = !1),
                  null == (i = this.checkCore()) || i.setQuality(e, t);
              }),
              (t.setRebufferToLive = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setRebufferToLive(e);
              }),
              (t.setVisible = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setVisible(e);
              }),
              (t.setVolume = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setVolume(e);
              }),
              (t.startRemotePlayback = function () {
                var e;
                null == (e = this.checkCore()) || e.startRemotePlayback();
              }),
              (t.setPlatformName = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setPlatformName(e);
              }),
              (t.setRequestCredentials = function (e) {
                var t;
                null == (t = this.checkCore()) || t.setRequestCredentials(e);
              }),
              (t.checkCore = function () {
                return (
                  this.core ||
                    console.warn("Method called on deleted player instance."),
                  this.core
                );
              }),
              e
            );
          })();
        (Tt.isVP9Supported = ct.isVP9Supported),
          (function (e) {
            (e.UNKNOWN = "Unspecified"),
              (e.FILE = "File"),
              (e.SEGMENT = "Segment"),
              (e.SOURCE = "Source"),
              (e.DECODER = "Decode"),
              (e.RENDERER = "Render"),
              (e.MASTER_PLAYLIST = "MasterPlaylist"),
              (e.MEDIA_PLAYLIST = "MediaPlaylist"),
              (e.DRM = "DRM");
          })(mt || (mt = {})),
          (function (e) {
            (e.GENERIC = "Error"),
              (e.NOT_SUPPORTED = "ErrorNotSupported"),
              (e.NO_SOURCE = "ErrorNoSource"),
              (e.INVALID_DATA = "ErrorInvalidData"),
              (e.INVALID_STATE = "ErrorInvalidState"),
              (e.INVALID_PARAMETER = "ErrorInvalidParameter"),
              (e.TIMEOUT = "ErrorTimeout"),
              (e.NETWORK = "ErrorNetwork"),
              (e.NETWORK_IO = "ErrorNetworkIO"),
              (e.AUTHORIZATION = "ErrorAuthorization"),
              (e.NOT_AVAILABLE = "ErrorNotAvailable");
          })(pt || (pt = {})),
          (function (e) {
            (e[(e.GEOBLOCKED = 1)] = "GEOBLOCKED"),
              (e[(e.UNSUPPORTED_DEVICE = 2)] = "UNSUPPORTED_DEVICE"),
              (e[(e.ANONYMIZER_BLOCKED = 3)] = "ANONYMIZER_BLOCKED"),
              (e[(e.CELLULAR_NETWORK_PROHIBITED = 4)] =
                "CELLULAR_NETWORK_PROHIBITED"),
              (e[(e.UNAUTHORIZATION_ENTITLEMENTS = 5)] =
                "UNAUTHORIZATION_ENTITLEMENTS"),
              (e[(e.VOD_RESTRICTED = 6)] = "VOD_RESTRICTED");
          })(gt || (gt = {})),
          (function (e) {
            (e.CAPTURE_ENABLED = "CaptureEnabled"),
              (e.CAPTURE_BUNDLE = "CaptureBundle"),
              (e.CAPTURE_ANALYTICS = "CaptureAnalytics"),
              (e.FMP4_SEGMENT = "FMP4Segment");
          })(yt || (yt = {})),
          (function (e) {
            (e.DEBUG = "debug"),
              (e.INFO = "info"),
              (e.WARN = "warn"),
              (e.ERROR = "error");
          })(Et || (Et = {})),
          (function (e) {
            (e.DURATION_CHANGE = "durationchange"),
              (e.ENDED = "ended"),
              (e.ERROR = "error"),
              (e.LOADED_METADATA = "loadedmetadata"),
              (e.LOADSTART = "loadstart"),
              (e.PAUSE = "pause"),
              (e.PLAY = "play"),
              (e.PLAYING = "playing"),
              (e.RATE_CHANGE = "ratechange"),
              (e.SEEKED = "seeked"),
              (e.SEEKING = "seeking"),
              (e.TIME_UPDATE = "timeupdate"),
              (e.VOLUME_CHANGE = "volumechange"),
              (e.WAITING = "waiting");
          })(kt || (kt = {})),
          (function (e) {
            (e[(e.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
              (e[(e.HAVE_METADATA = 1)] = "HAVE_METADATA"),
              (e[(e.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
              (e[(e.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
              (e[(e.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA");
          })(bt || (bt = {}));
        var Ct =
            (((St = {})[Y.IDLE] = 1),
            (St[Y.READY] = 1),
            (St[Y.BUFFERING] = 2),
            (St[Y.PLAYING] = 2),
            (St[Y.ENDED] = 1),
            St),
          Pt = "AmazonIVS";
        function At(e, t) {
          if (void 0 === e || "function" != typeof e.getTech)
            throw {
              message: "videojs not available, AmazonIVS tech not registered",
              code: 1,
            };
          if (!ft)
            throw {
              message: "WebAssembly support is required for AmazonIVS tech",
              code: 2,
            };
          if (!e.getTech(Pt)) {
            var i = e.getTech("Tech"),
              n = e.extend(i, {
                constructor: function (n, r) {
                  (this._readyState = bt.HAVE_NOTHING),
                    (this._defaultPlaybackRate = 1),
                    (this._seeking = !1),
                    (t.playerFramework = {
                      name: "videojs",
                      version: e.VERSION,
                    }),
                    (this._mediaPlayer = vt(t)),
                    this._mediaPlayer.setAutoplay(!0 === n.autoplay),
                    this._attachVideojsListeners(),
                    this._mediaPlayer.addEventListener(
                      V.METADATA,
                      this._onCaptionEvent.bind(this)
                    ),
                    (this.featuresProgressEvents = !0),
                    (this.featuresTimeupdateEvents = !0),
                    (this.featuresPlaybackRate = !0),
                    (this.featuresFullscreenResize = !0),
                    (this.featuresVolumeControl = !0),
                    (this.featuresMuteControl = !0),
                    (this.featuresNativeTextTracks = !1),
                    i.call(this, n, r),
                    window.vttjs && window.vttjs.restore(),
                    this.triggerReady(),
                    setTimeout(
                      function () {
                        this.options_.loop && this._mediaPlayer.setLooping(!0),
                          this.options_.muted && this._mediaPlayer.setMuted(!0);
                      }.bind(this),
                      0
                    );
                },
                dispose: function () {
                  this._mediaPlayer.delete();
                },
                setPreload: function () {},
                autoplay: function (e) {
                  if ("boolean" != typeof e) return this._mediaPlayer.autoplay;
                  this.setAutoplay(e);
                },
                setAutoplay: function (e) {
                  this._mediaPlayer.setAutoplay(e);
                },
                preload: function () {},
                load: function () {},
                readyState: function () {
                  return this._readyState;
                },
                seeking: function () {
                  return this._seeking;
                },
                networkState: function () {
                  if (!this._mediaPlayer) return 0;
                  if (!this._mediaPlayer.getHTMLVideoElement().src) return 3;
                  var e = this._mediaPlayer.getState();
                  return Ct[e];
                },
                ended: function () {
                  return this._mediaPlayer.getState() === Y.ENDED;
                },
                seekable: function () {
                  return e.createTimeRange(0, this._mediaPlayer.getDuration());
                },
                play: function () {
                  this._mediaPlayer.play(), this.trigger(kt.PLAY);
                },
                pause: function () {
                  this._mediaPlayer.pause();
                },
                setCurrentTime: function (e) {
                  this._mediaPlayer.getHTMLVideoElement().src &&
                    (this._mediaPlayer.seekTo(e),
                    (this._seeking = !0),
                    this.trigger(kt.SEEKING));
                },
                controls: function () {
                  return !1;
                },
                setControls: function () {
                  return !1;
                },
                muted: function () {
                  return this._mediaPlayer.isMuted();
                },
                setMuted: function (e) {
                  this._mediaPlayer.setMuted(e);
                },
                volume: function () {
                  return this._mediaPlayer.getVolume();
                },
                setVolume: function (e) {
                  this._mediaPlayer.setVolume(e);
                },
                defaultPlaybackRate: function (e) {
                  if (!e) return this._defaultPlaybackRate;
                  this._defaultPlaybackRate = e;
                },
                playbackRate: function () {
                  return this._mediaPlayer.getPlaybackRate();
                },
                setPlaybackRate: function (e) {
                  this._mediaPlayer.setPlaybackRate(e);
                },
                paused: function () {
                  return this._mediaPlayer.isPaused();
                },
                duration: function () {
                  return this._mediaPlayer.getDuration();
                },
                currentTime: function () {
                  return this._mediaPlayer.getPosition();
                },
                createEl: function () {
                  var e = this._mediaPlayer.getHTMLVideoElement();
                  e.setAttribute("class", "vjs-tech"),
                    void 0 !== this.options_.disablePictureInPicture &&
                      (e.disablePictureInPicture =
                        this.options_.disablePictureInPicture),
                    ["preload", "poster"].forEach(
                      function (t) {
                        this.options_[t] && e.setAttribute(t, this.options_[t]);
                      }.bind(this)
                    ),
                    this.options_.playsinline &&
                      (e.setAttribute("webkit-playsinline", ""),
                      e.setAttribute("playsinline", ""));
                  var t = document.createElement("div");
                  return t.appendChild(e), t;
                },
                src: function (e) {
                  this.trigger(kt.LOADSTART),
                    (this._seeking = !1),
                    this._captionTrack &&
                      (this.textTracks().removeTrack(this._captionTrack),
                      (this._captionTrack = null)),
                    e && this._mediaPlayer.load(e);
                },
                addEventListener: function (e, t) {
                  this._mediaPlayer.addEventListener(e, t);
                },
                removeEventListener: function (e, t) {
                  this._mediaPlayer.removeEventListener(e, t);
                },
                getMediaPlayerAPI: function () {
                  return this._mediaPlayer;
                },
                supportsFullScreen: function () {
                  return !0;
                },
                enterFullScreen: function () {
                  var e = this._mediaPlayer.getHTMLVideoElement();
                  (
                    e.requestFullscreen ||
                    e.webkitRequestFullscreen ||
                    e.mozRequestFullScreen ||
                    e.msRequestFullscreen ||
                    e.webkitEnterFullscreen ||
                    function () {
                      console.error("Fullscreen API is not available");
                    }
                  ).call(e);
                },
                exitFullScreen: function () {
                  (
                    document.exitFullScreen ||
                    document.webkitExitFullscreen ||
                    document.mozCancelFullScreen ||
                    document.msExitFullscreen ||
                    function () {
                      console.error("Exitscreen API is not available");
                    }
                  ).call(document);
                },
                requestPictureInPicture: function () {
                  return this._mediaPlayer
                    .getHTMLVideoElement()
                    .requestPictureInPicture();
                },
                setDisablePictureInPicture: function (e) {
                  this._mediaPlayer.getHTMLVideoElement().disablePictureInPicture =
                    e;
                },
                disablePictureInPicture: function () {
                  return this._mediaPlayer.getHTMLVideoElement()
                    .disablePictureInPicture;
                },
                _onCaptionEvent: function (e) {
                  if ("text/json" === e.type) {
                    var t = JSON.parse(e.data);
                    if (t.caption) {
                      var i = t.caption;
                      this._captionTrack ||
                        ((this._captionTrack = this.addTextTrack(
                          "captions",
                          i.format
                        )),
                        (this._currentCue = null)),
                        this._currentCue &&
                          this._captionTrack.removeCue(this._currentCue);
                      var n = this._mediaPlayer.getHTMLVideoElement(),
                        r = window.VTTCue || window.vttjs.VTTCue;
                      r
                        ? ((this._currentCue = new r(
                            n.currentTime,
                            n.currentTime + 2,
                            i.text
                          )),
                          this._captionTrack.addCue(this._currentCue))
                        : console.warn(
                            "No VTTCue implementation available, caption may not be available"
                          );
                    }
                  }
                },
                _attachVideojsListeners: function () {
                  this._mediaPlayer.addEventListener(
                    Y.READY,
                    function () {
                      (this._readyState = bt.HAVE_METADATA),
                        this.trigger(kt.LOADED_METADATA);
                    }.bind(this)
                  ),
                    this._mediaPlayer.addEventListener(
                      Y.IDLE,
                      function () {
                        (this._readyState = bt.HAVE_NOTHING),
                          this.trigger(kt.PAUSE);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      Y.PLAYING,
                      function () {
                        this._readyState <= bt.HAVE_CURRENT_DATA &&
                          (this._readyState = bt.HAVE_FUTURE_DATA),
                          this.trigger(kt.PLAY),
                          this.trigger(kt.PLAYING);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      Y.ENDED,
                      function () {
                        (this._readyState = bt.HAVE_NOTHING),
                          this.trigger(kt.ENDED);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      Y.BUFFERING,
                      function () {
                        this._readyState = bt.HAVE_CURRENT_DATA;
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      V.REBUFFERING,
                      function () {
                        (this._readyState = bt.HAVE_CURRENT_DATA),
                          this.trigger(kt.WAITING);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      V.TIME_UPDATE,
                      function () {
                        this.trigger(kt.TIME_UPDATE);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      V.VOLUME_CHANGED,
                      function () {
                        this.trigger(kt.VOLUME_CHANGE);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      V.MUTED_CHANGED,
                      function () {
                        this.trigger(kt.VOLUME_CHANGE);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      V.ERROR,
                      function () {
                        this.trigger(kt.ERROR);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      V.DURATION_CHANGED,
                      function () {
                        this.trigger(kt.DURATION_CHANGE);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      V.SEEK_COMPLETED,
                      function () {
                        (this._seeking = !1), this.trigger(kt.SEEKED);
                      }.bind(this)
                    ),
                    this._mediaPlayer.addEventListener(
                      V.PLAYBACK_RATE_CHANGED,
                      function () {
                        this.trigger(kt.RATE_CHANGE);
                      }.bind(this)
                    );
                },
                techName: Pt,
              });
            (n.supportsFullScreen = function () {
              return !0;
            }),
              (n.isSupported = function () {
                return (
                  -1 ===
                  (navigator.appVersion || "").toLowerCase().indexOf("rv:11")
                );
              }),
              (n.canPlayType = function (e) {
                return (
                  "string" == typeof e &&
                  e.length > 0 &&
                  (e.indexOf("application/x-mpegURL") > -1
                    ? "undefined" != typeof MediaSource &&
                      MediaSource.isTypeSupported(
                        'video/mp4; codecs="avc1.42E01E,mp4a.40.2"'
                      )
                    : "" !== document.createElement("video").canPlayType(e))
                );
              }),
              (n.canPlaySource = function () {
                return !0;
              }),
              e.registerTech("AmazonIVS", n);
            var r = e.registerPlugin || e.plugin;
            r("getIVSEvents", function () {
              return {
                PlayerEventType: V,
                MetadataEventType: K,
                PlayerState: Y,
                ErrorType: pt,
              };
            }),
              r("getIVSPlayer", function () {
                return this.tech(!0).getMediaPlayerAPI();
              });
          }
        }
        var Mt = "enableIVSQualityPlugin";
        function Dt(e) {
          if (void 0 === e || "function" != typeof e.getTech)
            throw {
              message:
                "videojs not available, Amazon IVS Quality Plugin not registered",
              code: 1,
            };
          if (!e.getPlugin(Mt)) {
            var t = e.getComponent("MenuButton"),
              i = e.getComponent("MenuItem"),
              n = e.extend(i, {
                constructor: function (e, t) {
                  var n = t.quality;
                  i.call(this, e, { selectable: !0, label: n.name }),
                    (this.quality = n);
                },
                handleClick: function (e) {
                  i.prototype.handleClick.call(this, e);
                  var t = this.player().getIVSPlayer();
                  "auto" === this.quality.group
                    ? t.setAutoQualityMode(!0)
                    : t.setQuality(this.quality);
                },
              }),
              r = e.extend(t, {
                constructor: function (e) {
                  t.call(this, e, {}), this.controlText("Quality");
                },
                createItems: function () {
                  var e = this.player(),
                    t = e.getIVSPlayer(),
                    i = [],
                    r = new n(e, { quality: { group: "auto", name: "Auto" } });
                  r.selected(t.isAutoQualityMode()),
                    r.on("click", this._clickHandler.bind(this, r)),
                    r.on("tap", this._clickHandler.bind(this, r)),
                    i.push(r);
                  var o = t.getQuality(),
                    s = t.getQualities();
                  return (
                    s &&
                      s.length > 0 &&
                      s.forEach(
                        function (r) {
                          var s = new n(e, { quality: r });
                          s.on("click", this._clickHandler.bind(this, s)),
                            s.on("tap", this._clickHandler.bind(this, s)),
                            t.isAutoQualityMode() ||
                              s.selected(o.group === r.group),
                            i.push(s);
                        }.bind(this)
                      ),
                    t.addEventListener(V.QUALITY_CHANGED, function (i) {
                      e.controlBar
                        .getChild("QualityMenuButton")
                        .qualityItems.forEach(function (e) {
                          !t.isAutoQualityMode() &&
                            i &&
                            e &&
                            e.quality &&
                            e.selected(i.group === e.quality.group);
                        });
                    }),
                    (this.qualityItems = i),
                    i
                  );
                },
                buildCSSClass: function () {
                  return (
                    "vjs-icon-hd vjs-icon-placeholder " +
                    t.prototype.buildCSSClass.call(this)
                  );
                },
                _clickHandler: function (e) {
                  this.items.forEach(function (t) {
                    t !== e && t.selected(!1);
                  });
                },
              });
            e.registerComponent("QualityMenuButton", r),
              (e.registerPlugin || e.plugin)(Mt, function () {
                var e = this;
                e.getIVSPlayer().addEventListener(Y.READY, function () {
                  var t = e.controlBar.getChild("QualityMenuButton");
                  t && (t.dispose(), e.controlBar.removeChild(t)),
                    e.controlBar.addChild("QualityMenuButton");
                });
              });
          }
        }
        e.exports = n;
      })();
    },
  },
]);
