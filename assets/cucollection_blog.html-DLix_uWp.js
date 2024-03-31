import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as t,c as a,a as e,d as l,w as d,e as c,b as r}from"./app-Coh1oo3x.js";const v="/assets/log-By5kpURY.jpeg",u={},m=e("h1",{id:"cucollections性能测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cucollections性能测试"},[e("span",null,"cuCollections性能测试")])],-1),o=e("h2",{id:"_0-测试目标",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0-测试目标"},[e("span",null,"0. 测试目标")])],-1),b=e("li",null,"cucollection性能分析（测试在负载因子为0.8/0.9时的性能，以及空载时的插入性能，吞吐量，带宽 etc）key为64bit int，数据使用均匀分布",-1),p=e("ul",null,[e("li",null,"[x] 阅读benchmark代码，修改benchmark中的参数，测试不同负载因子下的性能( dynamic, static)"),e("li",null,"[x] 弄清example中的示例，基本用法，可参考test"),e("li",null,"[x] 根据所需测试性能参数修改benchmark测试")],-1),_=c(`<h2 id="_1-环境配置" tabindex="-1"><a class="header-anchor" href="#_1-环境配置"><span>1. 环境配置</span></a></h2><ul><li><p>测试环境：</p><table><thead><tr><th>IP Address</th><th>x.x.x.x</th></tr></thead><tbody><tr><td>OS</td><td>Ubuntu 18.04 LTS</td></tr><tr><td>GPU</td><td>8xA100-40G / 8x Tesla V100-PCIE-32GB</td></tr><tr><td>Interconnectivity</td><td>PCIe</td></tr><tr><td>Container</td><td>NGC Pytorch 21.09-py3 / NGC Tensorflow 22.10-tf1-py3</td></tr></tbody></table></li><li><p>pytorch:</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  <span class="token comment"># https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel_21-09.html#rel_21-09</span>
  <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;cucollection-pt21.09&quot;</span> <span class="token parameter variable">--privileged</span> <span class="token parameter variable">--net</span><span class="token operator">=</span>host <span class="token parameter variable">--gpus</span> all <span class="token parameter variable">--ipc</span><span class="token operator">=</span>host <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">memlock</span><span class="token operator">=</span>-1 <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">stack</span><span class="token operator">=</span><span class="token number">67108864</span> <span class="token parameter variable">-v</span> /data:/data <span class="token parameter variable">-w</span> / nvcr.io/nvidia/pytorch:21.09-py3 /bin/bash
  
  <span class="token comment"># 安装cmake(至少3.23)（原来的cmake是conda内安装的）</span>
  <span class="token function">wget</span> https://cmake.org/files/v3.23/cmake-3.23.5-linux-x86_64.tar.gz <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
  <span class="token function">tar</span> xf cmake-3.23.5-linux-x86_64.tar.gz <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
  <span class="token function">mv</span> cmake-3.23.5-linux-x86_64 /opt/cmake-3.23.5 <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
  <span class="token function">ln</span> <span class="token parameter variable">-sf</span> /opt/cmake-3.23.5/bin/* /usr/bin
  
  <span class="token function">vim</span> ~/.bashrc
  <span class="token comment"># 添加下面一行内容</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/opt/cmake-3.23.5/bin
  <span class="token builtin class-name">source</span> ~/.bashrc
  
  <span class="token comment"># pull repository</span>
  <span class="token function">git</span> clone https://github.com/NVIDIA/cuCollections.git
  
  <span class="token comment"># build cucollections</span>
  <span class="token builtin class-name">cd</span> cuCollections
  <span class="token function">mkdir</span> build
  <span class="token builtin class-name">cd</span> build
  /opt/cmake-3.23.5/bin/cmake <span class="token punctuation">..</span>
  <span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>tensorflow:</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  <span class="token comment"># https://catalog.ngc.nvidia.com/orgs/nvidia/containers/tensorflow/tags </span>
  <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;cucollection-tf1.15&quot;</span> <span class="token parameter variable">--privileged</span> <span class="token parameter variable">--runtime</span><span class="token operator">=</span>nvidia <span class="token parameter variable">--net</span><span class="token operator">=</span>host <span class="token parameter variable">--gpus</span> all <span class="token parameter variable">--ipc</span><span class="token operator">=</span>host <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">memlock</span><span class="token operator">=</span>-1 <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">stack</span><span class="token operator">=</span><span class="token number">67108864</span> <span class="token parameter variable">-v</span> /data:/data <span class="token parameter variable">-w</span> / nvcr.io/nvidia/tensorflow:22.10-tf1-py3 /bin/bash
  
  <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;cucollection-tf1.15&quot;</span> <span class="token parameter variable">--privileged</span> <span class="token parameter variable">--runtime</span><span class="token operator">=</span>nvidia <span class="token parameter variable">--net</span><span class="token operator">=</span>host <span class="token parameter variable">--gpus</span> all <span class="token parameter variable">--ipc</span><span class="token operator">=</span>host <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">memlock</span><span class="token operator">=</span>-1 <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">stack</span><span class="token operator">=</span><span class="token number">67108864</span> <span class="token parameter variable">-v</span> /data:/data <span class="token parameter variable">-w</span> / nvcr.io/nvidia/tensorflow:22.09-tf1-py3 /bin/bash
  
  <span class="token comment"># 升级cmake(至少3.23)</span>
  <span class="token function">apt-get</span> autoremove cmake <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
  <span class="token function">apt</span> <span class="token function">install</span> build-essential libssl-dev <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
  <span class="token function">wget</span> https://cmake.org/files/v3.23/cmake-3.23.5-linux-x86_64.tar.gz <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
  <span class="token function">tar</span> xf cmake-3.23.5-linux-x86_64.tar.gz <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
  <span class="token function">mv</span> cmake-3.23.5-linux-x86_64 /opt/cmake-3.23.5 <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
  <span class="token function">ln</span> <span class="token parameter variable">-sf</span> /opt/cmake-3.23.5/bin/* /usr/bin
  
  <span class="token function">vim</span> ~/.bashrc
  <span class="token comment"># 添加下面一行内容</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/opt/cmake-3.23.5/bin
  <span class="token builtin class-name">source</span> ~/.bashrc
  
  <span class="token comment"># pull repository</span>
  <span class="token function">git</span> clone https://github.com/NVIDIA/cuCollections.git
  
  <span class="token comment"># build cucollections(cmake失败时可不删除build文件夹重新再执行一次cmake ..)</span>
  <span class="token builtin class-name">cd</span> cuCollections <span class="token operator">&amp;&amp;</span>/
  <span class="token function">mkdir</span> build <span class="token operator">&amp;&amp;</span>/
  <span class="token builtin class-name">cd</span> build <span class="token operator">&amp;&amp;</span>/
  cmake <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span>/
  <span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-benchmark" tabindex="-1"><a class="header-anchor" href="#_2-benchmark"><span>2. Benchmark</span></a></h2><ul><li><p>修改benchmark内容用于测试：</p></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// ./cuCollections/benchmarks/hash_table/static_map_bench.cu

/*
 * Copyright (c) 2020-2022, NVIDIA CORPORATION.
 *
 * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include &lt;cuco/static_map.cuh&gt;

#include &lt;thrust/device_vector.h&gt;
#include &lt;thrust/for_each.h&gt;

#include &lt;benchmark/benchmark.h&gt;

#include &lt;fstream&gt;
#include &lt;random&gt;

enum class dist_type { UNIQUE, UNIFORM, GAUSSIAN };

template &lt;dist_type Dist, typename Key, typename OutputIt&gt;
static void generate_keys(OutputIt output_begin, OutputIt output_end)
{
  auto num_keys = std::distance(output_begin, output_end);

  std::random_device rd;
  std::mt19937 gen{rd()};

  switch (Dist) {
    case dist_type::UNIQUE:
      for (auto i = 0; i &lt; num_keys; ++i) {
        output_begin[i] = i;
      }
      break;
    case dist_type::UNIFORM:
      for (auto i = 0; i &lt; num_keys; ++i) {
        output_begin[i] = std::abs(static_cast&lt;Key&gt;(gen()));
      }
      break;
    case dist_type::GAUSSIAN:
      std::normal_distribution&lt;&gt; dg{1e9, 1e7};
      for (auto i = 0; i &lt; num_keys; ++i) {
        output_begin[i] = std::abs(static_cast&lt;Key&gt;(dg(gen)));
      }
      break;
  }
}

/**
 * @brief Generates input sizes and hash table occupancies
 *
 */
static void generate_size_and_occupancy(benchmark::internal::Benchmark* b)
{
  // for (auto size = 100&#39;000&#39;000; size &lt;= 100&#39;000&#39;000; size *= 10) {
  //   for (auto occupancy = 10; occupancy &lt;= 90; occupancy += 40) {
  //     b-&gt;Args({size, occupancy});
  //   }
  // }
  b-&gt;Args({80&#39;000&#39;000, 80});
  b-&gt;Args({90&#39;000&#39;000, 90});
}

template &lt;typename Key, typename Value, dist_type Dist&gt;
static void BM_static_map_insert(::benchmark::State&amp; state)
{
  using map_type = cuco::static_map&lt;Key, Value&gt;;

  std::size_t num_keys = state.range(0);
  float occupancy      = state.range(1) / float{100};
  std::size_t size     = num_keys / occupancy;
  // std::cout&lt;&lt;&quot;num_keys:&quot;&lt;&lt;num_keys&lt;&lt;&quot; occupancy:&quot;&lt;&lt;occupancy&lt;&lt;&quot; size:&quot;&lt;&lt;size&lt;&lt;std::endl;

  std::vector&lt;Key&gt; h_keys(num_keys);
  std::vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; h_pairs(num_keys);

  generate_keys&lt;Dist, Key&gt;(h_keys.begin(), h_keys.end());

  for (std::size_t i = 0; i &lt; num_keys; ++i) {
    Key key           = h_keys[i];
    Value val         = h_keys[i];
    h_pairs[i].first  = key;
    h_pairs[i].second = val;
  }

  thrust::device_vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; d_pairs(h_pairs);
  thrust::device_vector&lt;Key&gt; d_keys(h_keys);

  for (auto _ : state) {
    map_type map{size, cuco::sentinel::empty_key&lt;Key&gt;{-1}, cuco::sentinel::empty_value&lt;Value&gt;{-1}};

    cudaEvent_t start, stop;
    cudaEventCreate(&amp;start);
    cudaEventCreate(&amp;stop);

    cudaEventRecord(start);
    map.insert(d_pairs.begin(), d_pairs.end());
    cudaEventRecord(stop);
    cudaEventSynchronize(stop);

    float ms;
    cudaEventElapsedTime(&amp;ms, start, stop);

    state.SetIterationTime(ms / 1000);
    // std::cout&lt;&lt;&quot;size:&quot;&lt;&lt;map.get_size()&lt;&lt;&quot; capacity:&quot;&lt;&lt;map.get_capacity()&lt;&lt;&quot; load_factor:&quot;&lt;&lt;map.get_load_factor()&lt;&lt;std::endl;
  }

  state.SetBytesProcessed((sizeof(Key) + sizeof(Value)) * int64_t(state.iterations()) *
                          int64_t(state.range(0)));
}

template &lt;typename Key, typename Value, dist_type Dist&gt;
static void BM_static_map_search_all(::benchmark::State&amp; state)
{
  using map_type = cuco::static_map&lt;Key, Value&gt;;

  std::size_t num_keys = state.range(0);
  float occupancy      = state.range(1) / float{100};
  std::size_t size     = num_keys / occupancy;

  map_type map{size, cuco::sentinel::empty_key&lt;Key&gt;{-1}, cuco::sentinel::empty_value&lt;Value&gt;{-1}};

  std::vector&lt;Key&gt; h_keys(num_keys);
  std::vector&lt;Value&gt; h_values(num_keys);
  std::vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; h_pairs(num_keys);
  std::vector&lt;Value&gt; h_results(num_keys);

  generate_keys&lt;Dist, Key&gt;(h_keys.begin(), h_keys.end());

  for (std::size_t i = 0; i &lt; num_keys; ++i) {
    Key key           = h_keys[i];
    Value val         = h_keys[i];
    h_pairs[i].first  = key;
    h_pairs[i].second = val;
  }

  thrust::device_vector&lt;Key&gt; d_keys(h_keys);
  thrust::device_vector&lt;Value&gt; d_results(num_keys);
  thrust::device_vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; d_pairs(h_pairs);

  map.insert(d_pairs.begin(), d_pairs.end());
  // std::cout&lt;&lt;&quot;INIT: size:&quot;&lt;&lt;map.get_size()&lt;&lt;&quot; capacity:&quot;&lt;&lt;map.get_capacity()&lt;&lt;&quot; load_factor:&quot;&lt;&lt;map.get_load_factor()&lt;&lt;std::endl;

  for (auto _ : state) {
    map.find(d_keys.begin(), d_keys.end(), d_results.begin());
    // TODO: get rid of sync and rewrite the benchmark with \`nvbench\`
    // once https://github.com/NVIDIA/nvbench/pull/80 is merged
    cudaDeviceSynchronize();
    // std::cout&lt;&lt;&quot;size:&quot;&lt;&lt;map.get_size()&lt;&lt;&quot; capacity:&quot;&lt;&lt;map.get_capacity()&lt;&lt;&quot; load_factor:&quot;&lt;&lt;map.get_load_factor()&lt;&lt;std::endl;
  }

  state.SetBytesProcessed((sizeof(Key) + sizeof(Value)) * int64_t(state.iterations()) *
                          int64_t(state.range(0)));
}

template &lt;typename Key, typename Value, dist_type Dist&gt;
static void BM_static_map_erase_all(::benchmark::State&amp; state)
{
  using map_type = cuco::static_map&lt;Key, Value&gt;;

  std::size_t num_keys = state.range(0);
  float occupancy      = state.range(1) / float{100};
  std::size_t size     = num_keys / occupancy;

  // static map with erase support
  map_type map{size,
               cuco::sentinel::empty_key&lt;Key&gt;{-1},
               cuco::sentinel::empty_value&lt;Value&gt;{-1},
               cuco::sentinel::erased_key&lt;Key&gt;{-2}};

  std::vector&lt;Key&gt; h_keys(num_keys);
  std::vector&lt;Value&gt; h_values(num_keys);
  std::vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; h_pairs(num_keys);
  std::vector&lt;Value&gt; h_results(num_keys);

  generate_keys&lt;Dist, Key&gt;(h_keys.begin(), h_keys.end());

  for (std::size_t i = 0; i &lt; num_keys; ++i) {
    Key key           = h_keys[i];
    Value val         = h_keys[i];
    h_pairs[i].first  = key;
    h_pairs[i].second = val;
  }

  thrust::device_vector&lt;Key&gt; d_keys(h_keys);
  thrust::device_vector&lt;bool&gt; d_results(num_keys);
  thrust::device_vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; d_pairs(h_pairs);

  for (auto _ : state) {
    state.PauseTiming();
    map.insert(d_pairs.begin(), d_pairs.end());
    state.ResumeTiming();

    map.erase(d_keys.begin(), d_keys.end());
  }

  state.SetBytesProcessed((sizeof(Key) + sizeof(Value)) * int64_t(state.iterations()) *
                          int64_t(state.range(0)));
}

BENCHMARK_TEMPLATE(BM_static_map_insert, int32_t, int32_t, dist_type::UNIFORM)
  -&gt;Unit(benchmark::kMillisecond)
  -&gt;Apply(generate_size_and_occupancy)
  -&gt;UseManualTime();

BENCHMARK_TEMPLATE(BM_static_map_search_all, int32_t, int32_t, dist_type::UNIFORM)
  -&gt;Unit(benchmark::kMillisecond)
  -&gt;Apply(generate_size_and_occupancy);

BENCHMARK_TEMPLATE(BM_static_map_insert, int64_t, int64_t, dist_type::UNIFORM)
  -&gt;Unit(benchmark::kMillisecond)
  -&gt;Apply(generate_size_and_occupancy)
  -&gt;UseManualTime();

BENCHMARK_TEMPLATE(BM_static_map_search_all, int64_t, int64_t, dist_type::UNIFORM)
  -&gt;Unit(benchmark::kMillisecond)
  -&gt;Apply(generate_size_and_occupancy);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// ./cuCollections/benchmarks/hash_table/dynamic_map_bench.cu
/*
 * Copyright (c) 2020-2022, NVIDIA CORPORATION.
 *
 * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include &lt;synchronization.hpp&gt;

#include &lt;cuco/dynamic_map.cuh&gt;

#include &lt;thrust/device_vector.h&gt;

#include &lt;benchmark/benchmark.h&gt;

#include &lt;iostream&gt;
#include &lt;random&gt;

enum class dist_type { UNIQUE, UNIFORM, GAUSSIAN };

template &lt;dist_type Dist, typename Key, typename OutputIt&gt;
static void generate_keys(OutputIt output_begin, OutputIt output_end)
{
  auto num_keys = std::distance(output_begin, output_end);

  std::random_device rd;
  std::mt19937 gen{rd()};

  switch (Dist) {
    case dist_type::UNIQUE:
      for (auto i = 0; i &lt; num_keys; ++i) {
        output_begin[i] = i;
      }
      break;
    case dist_type::UNIFORM:
      for (auto i = 0; i &lt; num_keys; ++i) {
        output_begin[i] = std::abs(static_cast&lt;Key&gt;(gen()));
      }
      break;
    case dist_type::GAUSSIAN:
      std::normal_distribution&lt;&gt; dg{1e9, 1e7};
      for (auto i = 0; i &lt; num_keys; ++i) {
        output_begin[i] = std::abs(static_cast&lt;Key&gt;(dg(gen)));
      }
      break;
  }
}

static void gen_final_size(benchmark::internal::Benchmark* b)
{
  // for (auto size = 10&#39;000&#39;000; size &lt;= 150&#39;000&#39;000; size += 20&#39;000&#39;000) {
  //   b-&gt;Args({size});
  // }
  b-&gt;Args({150&#39;000&#39;000});
}

template &lt;typename Key, typename Value, dist_type Dist&gt;
static void BM_dynamic_insert(::benchmark::State&amp; state)
{
  using map_type = cuco::dynamic_map&lt;Key, Value&gt;;

  std::size_t num_keys     = state.range(0);
  // std::cout&lt;&lt;num_keys&lt;&lt;std::endl;
  std::size_t initial_size = 1 &lt;&lt; 27;
  // std::cout&lt;&lt;initial_size&lt;&lt;std::endl;

  std::vector&lt;Key&gt; h_keys(num_keys);
  std::vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; h_pairs(num_keys);

  generate_keys&lt;Dist, Key&gt;(h_keys.begin(), h_keys.end());

  for (std::size_t i = 0; i &lt; num_keys; ++i) {
    Key key           = h_keys[i];
    Value val         = h_keys[i];
    h_pairs[i].first  = key;
    h_pairs[i].second = val;
  }

  thrust::device_vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; d_pairs(h_pairs);

  std::size_t batch_size = 1E6;
  for (auto _ : state) {
    map_type map{
      initial_size, cuco::sentinel::empty_key&lt;Key&gt;{-1}, cuco::sentinel::empty_value&lt;Value&gt;{-1}};
    {
      cuda_event_timer raii{state};
      for (std::size_t i = 0; i &lt; num_keys; i += batch_size) {
        map.insert(d_pairs.begin() + i, d_pairs.begin() + i + batch_size);
        // std::cout&lt;&lt;&quot;size:&quot;&lt;&lt;map.get_size()&lt;&lt;&quot; capacity:&quot;&lt;&lt;map.get_capacity()&lt;&lt;&quot; load_factor:&quot;&lt;&lt;map.get_load_factor()&lt;&lt;std::endl;
      }
    }
  }

  state.SetBytesProcessed((sizeof(Key) + sizeof(Value)) * int64_t(state.iterations()) *
                          int64_t(state.range(0)));
}

template &lt;typename Key, typename Value, dist_type Dist&gt;
static void BM_dynamic_search_all(::benchmark::State&amp; state)
{
  using map_type = cuco::dynamic_map&lt;Key, Value&gt;;

  std::size_t num_keys     = state.range(0);
  std::size_t initial_size = 1 &lt;&lt; 27;

  std::vector&lt;Key&gt; h_keys(num_keys);
  std::vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; h_pairs(num_keys);

  generate_keys&lt;Dist, Key&gt;(h_keys.begin(), h_keys.end());

  for (std::size_t i = 0; i &lt; num_keys; ++i) {
    Key key           = h_keys[i];
    Value val         = h_keys[i];
    h_pairs[i].first  = key;
    h_pairs[i].second = val;
  }

  thrust::device_vector&lt;Key&gt; d_keys(h_keys);
  thrust::device_vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; d_pairs(h_pairs);
  thrust::device_vector&lt;Value&gt; d_results(num_keys);

  map_type map{
    initial_size, cuco::sentinel::empty_key&lt;Key&gt;{-1}, cuco::sentinel::empty_value&lt;Value&gt;{-1}};
  map.insert(d_pairs.begin(), d_pairs.end());

  for (auto _ : state) {
    cuda_event_timer raii{state};
    map.find(d_keys.begin(), d_keys.end(), d_results.begin());
  }

  state.SetBytesProcessed((sizeof(Key) + sizeof(Value)) * int64_t(state.iterations()) *
                          int64_t(state.range(0)));
}

BENCHMARK_TEMPLATE(BM_dynamic_insert, int32_t, int32_t, dist_type::UNIFORM)
  -&gt;Unit(benchmark::kMillisecond)
  -&gt;Apply(gen_final_size)
  -&gt;UseManualTime();

BENCHMARK_TEMPLATE(BM_dynamic_search_all, int32_t, int32_t, dist_type::UNIFORM)
  -&gt;Unit(benchmark::kMillisecond)
  -&gt;Apply(gen_final_size)
  -&gt;UseManualTime();

BENCHMARK_TEMPLATE(BM_dynamic_insert, int64_t, int64_t, dist_type::UNIFORM)
  -&gt;Unit(benchmark::kMillisecond)
  -&gt;Apply(gen_final_size)
  -&gt;UseManualTime();

BENCHMARK_TEMPLATE(BM_dynamic_search_all, int64_t, int64_t, dist_type::UNIFORM)
  -&gt;Unit(benchmark::kMillisecond)
  -&gt;Apply(gen_final_size)
  -&gt;UseManualTime();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重新编译后测试benchmark</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./build
<span class="token function">make</span>
<span class="token builtin class-name">cd</span> ./gbenchmarks
<span class="token function">ls</span>
<span class="token comment"># DYNAMIC_MAP_BENCH  RBK_BENCH  STATIC_MAP_BENCH</span>

./DYNAMIC_MAP_BENCH
./STATIC_MAP_BENCH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-测试结果" tabindex="-1"><a class="header-anchor" href="#_3-测试结果"><span>3. 测试结果</span></a></h2><ul><li><p>static_map:</p><ul><li><p>A100:</p></li><li><table><tr><th>配置</th><th>load_factor</th><th>OP</th><th>GPU time</th><th>CPU time</th><th>OPS</th><th>TPS</th></tr><tr><td rowspan="4">Key: Int32<br>Value: Int32<br>Random: Uniform</td><td rowspan="2">load_factor: 0.8<br>total_size:100000000</td><td>BM_static_map_insert</td><td>17.8 ms</td><td>22.1 ms</td><td>4.494 B</td><td>33.402 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>11.1 ms</td><td>11.1 ms</td><td>7.207 B</td><td>53.623 GB/sec</td></tr><tr><td rowspan="2">load_factor: 0.9<br>total_size:100000000</td><td>BM_static_map_insert</td><td>24.8 ms</td><td>29.2 ms</td><td>3.629 B</td><td>27.054 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>16.8 ms</td><td>16.8 ms</td><td>5.357 B</td><td>39.987 GB/sec</td></tr><tr><td rowspan="4">Key: Int64<br>Value: Int64<br>Random: Uniform</td><td rowspan="2">load_factor: 0.8<br>total_size:100000000</td><td>BM_static_map_insert</td><td>19.9 ms</td><td>25.9 ms</td><td>4.020 B</td><td>60.051 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>13.3 ms</td><td>13.3 ms</td><td>6.015 B</td><td>89.458 GB/sec</td></tr><tr><td rowspan="2">load_factor: 0.9<br>total_size:100000000</td><td>BM_static_map_insert</td><td>29.8 ms</td><td>36.5 ms</td><td>3.020 B</td><td>44.936 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>20.2 ms</td><td>20.2 ms</td><td>4.455 B</td><td>66.476 GB/sec</td></tr></table></li><li><p>V100:</p></li><li><table><tr><th>配置</th><th>load_factor</th><th>OP</th><th>GPU time</th><th>CPU time</th><th>OPS</th><th>TPS</th></tr><tr><td rowspan="4">Key: Int32<br>Value: Int32<br>Random: Uniform</td><td rowspan="2">load_factor: 0.8<br>total_size:100000000</td><td>BM_static_map_insert</td><td>51.3 ms</td><td>56.0 ms</td><td>1.559 B</td><td>11.629 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>22.7 ms</td><td>22.7 ms</td><td>3.524 B</td><td>26.238 GB/sec</td></tr><tr><td rowspan="2">load_factor: 0.9<br>total_size:100000000</td><td>BM_static_map_insert</td><td>63.3 ms</td><td>68.1 ms</td><td>1.421 B</td><td>10.587 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>32.4 ms</td><td>32.4 ms</td><td>2.778 B</td><td>20.688 GB/sec</td></tr><tr><td rowspan="4">Key: Int64<br>Value: Int64<br>Random: Uniform</td><td rowspan="2">load_factor: 0.8<br>total_size:100000000</td><td>BM_static_map_insert</td><td>58.7 ms</td><td>68.7 ms</td><td>1.363 B</td><td>20.296 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>26.8 ms</td><td>26.8 ms</td><td>2.985 B</td><td>44.415 GB/sec</td></tr><tr><td rowspan="2">load_factor: 0.9<br>total_size:100000000</td><td>BM_static_map_insert</td><td>76.6 ms</td><td>86.5 ms</td><td>1.175 B</td><td>17.506 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>40.5 ms</td><td>40.5 ms</td><td>2.222 B</td><td>33.102 GB/sec</td></tr></table></li></ul></li><li><p>dynamic_map: (从空载到插入对应大小key的性能，当超过load_factor设定值时将以放大2倍的形式扩容)</p></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 修改dynamic_map的load_factor方法:
// ./cuCollections/include/cuco/detail/dynamic_map.inl

namespace cuco {

template &lt;typename Key, typename Value, cuda::thread_scope Scope, typename Allocator&gt;
dynamic_map&lt;Key, Value, Scope, Allocator&gt;::dynamic_map(
  std::size_t initial_capacity,
  sentinel::empty_key&lt;Key&gt; empty_key_sentinel,
  sentinel::empty_value&lt;Value&gt; empty_value_sentinel,
  Allocator const&amp; alloc)
  : empty_key_sentinel_(empty_key_sentinel.value),
    empty_value_sentinel_(empty_value_sentinel.value),
    size_(0),
    capacity_(initial_capacity),
    min_insert_size_(1E4),
    max_load_factor_(0.60), // 修改load_factor为0.8/0.9
    alloc_{alloc}
    {...}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>A100:</p></li><li><table><tr><th>配置</th><th>load_factor</th><th>OP</th><th>GPU time</th><th>CPU time</th><th>OPS</th><th>TPS</th></tr><tr><td rowspan="4">Key: Int32<br>Value: Int32<br>Random: Uniform</td><td rowspan="2">load_factor: 0.8<br>key_size:150000000</td><td>BM_static_map_insert</td><td>117.0 ms</td><td>125.0 ms</td><td>1.282 B</td><td>9.529 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>36.0 ms</td><td>36.0 ms</td><td>4.167 B</td><td>31.079 GB/sec</td></tr><tr><td rowspan="2">load_factor: 0.9<br>key_size:150000000</td><td>BM_static_map_insert</td><td>161 ms</td><td>169 ms</td><td>0.932 B</td><td>6.946 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>56.0 ms</td><td>56.0 ms</td><td>2.679 B</td><td>19.954 GB/sec</td></tr><tr><td rowspan="4">Key: Int64<br>Value: Int64<br>Random: Uniform</td><td rowspan="2">load_factor: 0.8<br>key_size:150000000</td><td>BM_static_map_insert</td><td>162.0 ms</td><td>174.0 ms</td><td>0.926 B</td><td>13.815 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>48.6 ms</td><td>48.6 ms</td><td>3.086 B</td><td>46.037 GB/sec</td></tr><tr><td rowspan="2">load_factor: 0.9<br>key_size:150000000</td><td>BM_static_map_insert</td><td>210 ms</td><td>222 ms</td><td>0.714 B</td><td>10.632 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>81.6 ms</td><td>81.6 ms</td><td>1.838 B</td><td>27.404 GB/sec</td></tr></table></li><li><p>V100:</p></li><li><table><tr><th>配置</th><th>load_factor</th><th>OP</th><th>GPU time</th><th>CPU time</th><th>OPS</th><th>TPS</th></tr><tr><td rowspan="4">Key: Int32<br>Value: Int32<br>Random: Uniform</td><td rowspan="2">load_factor: 0.8<br>key_size:150000000</td><td>BM_static_map_insert</td><td>152 ms</td><td>158 ms</td><td>0.987 B</td><td>7.370 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>63.5 ms</td><td>63.5 ms</td><td>2.362 B</td><td>17.610 GB/sec</td></tr><tr><td rowspan="2">load_factor: 0.9<br>key_size:150000000</td><td>BM_static_map_insert</td><td>216 ms</td><td>223 ms</td><td>0.694 B</td><td>5.173 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>92.8 ms</td><td>92.8 ms</td><td>1.616 B</td><td>12.049 GB/sec</td></tr><tr><td rowspan="4">Key: Int64<br>Value: Int64<br>Random: Uniform</td><td rowspan="2">load_factor: 0.8<br>key_size:150000000</td><td>BM_static_map_insert</td><td>192 ms</td><td>206 ms</td><td>0.781 B</td><td>11.637 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>83.7 ms</td><td>83.7 ms</td><td>1.792 B</td><td>26.698 GB/sec</td></tr><tr><td rowspan="2">load_factor: 0.9<br>key_size:150000000</td><td>BM_static_map_insert</td><td>287 ms</td><td>299 ms</td><td>0.523 B</td><td>7.800 GB/sec</td></tr><tr><td>BM_static_map_search_all</td><td>141 ms</td><td>141 ms</td><td>1.064 B</td><td>15.896 GB/sec</td></tr></table></li></ul></li><li><p>key: int64（均匀分布） value: 64 bytes（任意值）</p></li><li><p>每次插入3000000个数据，需要记录每轮插入数据的load_factor和throughput（Gpair/s）</p></li><li><p>e.g.<img src="`+v+`" alt="有度20221115152533" style="zoom:150%;"></p></li><li><p>Gpair/s</p></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>
#include &lt;cuco/static_map.cuh&gt;

#include &lt;thrust/device_vector.h&gt;
#include &lt;thrust/for_each.h&gt;
#include &lt;thrust/iterator/counting_iterator.h&gt;
#include &lt;thrust/iterator/transform_iterator.h&gt;
#include &lt;thrust/logical.h&gt;
#include &lt;thrust/transform.h&gt;

#include &lt;benchmark/benchmark.h&gt;

#include &lt;fstream&gt;
#include &lt;random&gt;


// User-defined value type
struct Embedding_64 {
  int64_t data[8];

  __host__ __device__ Embedding_64() {}
  __host__ __device__ Embedding_64(int64_t x) : data{x} {}
  __device__ bool operator == (Embedding_64 const&amp; cmp)
  {
    return data[0] == cmp.data[0];
  }
};

struct Embedding_128 {
  int64_t data[16];

  __host__ __device__ Embedding_128() {}
  __host__ __device__ Embedding_128(int64_t x) : data{x} {}
  __device__ bool operator == (Embedding_128 const&amp; cmp)
  {
    return data[0] == cmp.data[0];
  }
};

struct Embedding_512 {
  int64_t data[64];

  __host__ __device__ Embedding_512() {}
  __host__ __device__ Embedding_512(int64_t x) : data{x} {}
  __device__ bool operator == (Embedding_512 const&amp; cmp)
  {
    return data[0] == cmp.data[0];
  }
};

// Generate key with uniform distribution
template &lt;typename Key, typename OutputIt&gt;
static void generate_keys(OutputIt output_begin, OutputIt output_end)
{
  auto num_keys = std::distance(output_begin, output_end);

  std::random_device rd;
  std::mt19937 gen{rd()};

  for (auto i = 0; i &lt; num_keys; ++i) {
    output_begin[i] = std::abs(static_cast&lt;Key&gt;(gen()));
  }
}


int main(void)
{
  using Key = int64_t;
  // using Value = int64_t;
  using Value = Embedding_128;
  using map_type = cuco::static_map&lt;Key, Value&gt;;

  std::size_t num_keys = 95&#39;000&#39;000;
  std::size_t size     = 100&#39;000&#39;000;

  std::vector&lt;Key&gt; h_keys(num_keys);
  std::vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; h_pairs(num_keys);
  generate_keys&lt;Key&gt;(h_keys.begin(), h_keys.end());
  std::cout&lt;&lt;&quot;Key_size:&quot;&lt;&lt;sizeof(Key)&lt;&lt;&quot; Value_size:&quot;&lt;&lt;sizeof(Value)&lt;&lt;std::endl;

  for (std::size_t i = 0; i &lt; num_keys; ++i) {
    Key key           = h_keys[i];
    Value val{i};
    h_pairs[i].first  = key;
    h_pairs[i].second = val;
  }

  thrust::device_vector&lt;cuco::pair_type&lt;Key, Value&gt;&gt; d_pairs(h_pairs);
  thrust::device_vector&lt;Key&gt; d_keys(h_keys);

  map_type map{size, cuco::sentinel::empty_key&lt;Key&gt;{-1}, cuco::sentinel::empty_value&lt;Value&gt;{Value{-1}}};
  int64_t last_loop_key_size = 0;
  for(size_t i=0; i&lt;num_keys/3&#39;000&#39;000; i+=1)
  {
    cudaEvent_t start, stop;
    cudaEventCreate(&amp;start);
    cudaEventCreate(&amp;stop);

    cudaEventRecord(start);
    map.insert(d_pairs.begin()+i*3&#39;000&#39;000, d_pairs.begin()+(i+1)*3&#39;000&#39;000);
    cudaEventRecord(stop);
    cudaEventSynchronize(stop);

    float time_ms;
    cudaEventElapsedTime(&amp;time_ms, start, stop);

    std::cout&lt;&lt;&quot;time: &quot;&lt;&lt;time_ms&lt;&lt;&quot;ms key_size: &quot;&lt;&lt;map.get_size()&lt;&lt;&quot; total_size: &quot;&lt;&lt;map.get_capacity()&lt;&lt;&quot; load_factor: &quot;&lt;&lt;map.get_load_factor()&lt;&lt;&quot; throughput: &quot;&lt;&lt;(map.get_size()-last_loop_key_size)/time_ms/1&#39;000&#39;000&lt;&lt;&quot;Gpair/s&quot;&lt;&lt;std::endl;
    last_loop_key_size = map.get_size();
  }
  

  /*---Check whether all keys are inside the hashtable---*/ 
  // Reproduce inserted keys
  auto insert_keys =
    thrust::make_transform_iterator(thrust::make_counting_iterator&lt;int32_t&gt;(0),
                                    [] __device__(auto i) { return int64_t{i}; });

  thrust::device_vector&lt;bool&gt; contained(num_keys);
  map.contains(
    insert_keys, insert_keys + num_keys, contained.begin());

  assert(
    thrust::all_of(contained.begin(), contained.end(), [] __device__(auto const&amp; b) { return b; }));

  return 0;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>insert 调用关系：</p></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 用户定义cu文件调用insert方法，传入所有待插入的键值对
map.insert(d_pairs.begin()+i*loop_step, d_pairs.begin()+(i+1)*loop_step);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// ./cuCollections/include/cuco/detail/static_map.inl
// 调用kernel函数
template &lt;typename Key, typename Value, cuda::thread_scope Scope, typename Allocator&gt;
template &lt;typename InputIt, typename Hash, typename KeyEqual&gt;
void static_map&lt;Key, Value, Scope, Allocator&gt;::insert(
  InputIt first, InputIt last, Hash hash, KeyEqual key_equal, cudaStream_t stream)
{
  auto num_keys = std::distance(first, last);
  if (num_keys == 0) { return; }

  auto const block_size = 128;
  auto const stride     = 1;
  auto const tile_size  = 1;
  auto const grid_size  = (tile_size * num_keys + stride * block_size - 1) / (stride * block_size);
  auto view             = get_device_mutable_view();

  // TODO: memset an atomic variable is unsafe
  static_assert(sizeof(std::size_t) == sizeof(atomic_ctr_type));
  CUCO_CUDA_TRY(cudaMemsetAsync(num_successes_, 0, sizeof(atomic_ctr_type), stream));
  std::size_t h_num_successes;

  detail::insert&lt;block_size, tile_size&gt;&lt;&lt;&lt;grid_size, block_size, 0, stream&gt;&gt;&gt;(
    first, first + num_keys, num_successes_, view, hash, key_equal);
  CUCO_CUDA_TRY(cudaMemcpyAsync(
    &amp;h_num_successes, num_successes_, sizeof(atomic_ctr_type), cudaMemcpyDeviceToHost, stream));

  CUCO_CUDA_TRY(cudaStreamSynchronize(stream));  // stream sync to ensure h_num_successes is updated

  size_ += h_num_successes;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// ./cuCollections/include/cuco/detail/static_map_kernels.cuh
// 使用Cooperative Group来取得更高的吞吐并在高load_factor下保持稳定
// 将所有待插入的kv按照tile_size划分与分配，并进行最终的插入成功次数计数
template &lt;std::size_t block_size,
          uint32_t tile_size,
          typename InputIt,
          typename atomicT,
          typename viewT,
          typename Hash,
          typename KeyEqual&gt;
__global__ void insert(
  InputIt first, InputIt last, atomicT* num_successes, viewT view, Hash hash, KeyEqual key_equal)
{
  typedef cub::BlockReduce&lt;std::size_t, block_size&gt; BlockReduce;
  __shared__ typename BlockReduce::TempStorage temp_storage;
  std::size_t thread_num_successes = 0;

  auto tile = cg::tiled_partition&lt;tile_size&gt;(cg::this_thread_block());
  auto tid  = block_size * blockIdx.x + threadIdx.x;
  auto it   = first + tid / tile_size;

  while (it &lt; last) {
    // force conversion to value_type
    typename viewT::value_type const insert_pair{*it};
    if (view.insert(tile, insert_pair, hash, key_equal) &amp;&amp; tile.thread_rank() == 0) {
      thread_num_successes++;
    }
    it += (gridDim.x * block_size) / tile_size;
  }

  // compute number of successfully inserted elements for each block
  // and atomically add to the grand total
  std::size_t block_num_successes = BlockReduce(temp_storage).Sum(thread_num_successes);
  if (threadIdx.x == 0) { *num_successes += block_num_successes; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// cuCollections/include/cuco/detail/static_map.inl
// 每个tile每次插入一对kv的具体实现
template &lt;typename Key, typename Value, cuda::thread_scope Scope, typename Allocator&gt;
template &lt;typename CG, typename Hash, typename KeyEqual&gt;
__device__ bool static_map&lt;Key, Value, Scope, Allocator&gt;::device_mutable_view::insert(
  CG const&amp; g, value_type const&amp; insert_pair, Hash hash, KeyEqual key_equal) noexcept
{
  auto current_slot = initial_slot(g, insert_pair.first, hash);

  while (true) {
    key_type const existing_key = current_slot-&gt;first.load(cuda::std::memory_order_relaxed);

    // The user provide \`key_equal\` can never be used to compare against \`empty_key_sentinel\` as the
    // sentinel is not a valid key value. Therefore, first check for the sentinel
    auto const slot_is_available =
      detail::bitwise_compare(existing_key, this-&gt;get_empty_key_sentinel()) or
      detail::bitwise_compare(existing_key, this-&gt;get_erased_key_sentinel()); // if equal, return 1, means slot is avaliable

    // the key we are trying to insert is already in the map, so we return with failure to insert
    if (g.any(not slot_is_available and key_equal(existing_key, insert_pair.first))) {
      return false;
    }

    auto const window_contains_available = g.ballot(slot_is_available); // return 0 while no threads in g can get an avaliable slot

    // we found an empty slot, but not the key we are inserting, so this must
    // be an empty slot into which we can insert the key
    if (window_contains_available) {
      // the first lane in the group with an empty slot will attempt the insert
      insert_result status{insert_result::CONTINUE};
      uint32_t src_lane = __ffs(window_contains_available) - 1;

      if (g.thread_rank() == src_lane) {
        // One single CAS operation if \`value_type\` is packable
        if constexpr (cuco::detail::is_packable&lt;value_type&gt;()) {
          status = packed_cas(current_slot, insert_pair, key_equal, existing_key);
        }
        // Otherwise, two back-to-back CAS operations
        else {
          #if (__CUDA_ARCH__ &lt; 700)
            status = cas_dependent_write(current_slot, insert_pair, key_equal, existing_key);
          #else
            // 自定义embedding的value大小超过8B，使用b2b_cas分两次插入kv
            status = back_to_back_cas(current_slot, insert_pair, key_equal, existing_key);
          #endif
        }
      }

      uint32_t res_status = g.shfl(static_cast&lt;uint32_t&gt;(status), src_lane);
      status              = static_cast&lt;insert_result&gt;(res_status);

      // successful insert
      if (status == insert_result::SUCCESS) { return true; }
      // duplicate present during insert
      if (status == insert_result::DUPLICATE) { return false; }
      // if we&#39;ve gotten this far, a different key took our spot
      // before we could insert. We need to retry the insert on the
      // same window
    }
    // if there are no empty slots in the current window,
    // we move onto the next window
    else {
      // 当前window向后移
      current_slot = next_slot(g, current_slot);
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// cuCollections/include/cuco/detail/static_map.inl
// 插入操作的cas，key和value分别实现原子操作插入
// 要么是成功插入返回SUCCESS，要么是当前window无空slot返回CONTINUE，要么是当前key已经在map中了返回DUPLICATE
template &lt;typename Key, typename Value, cuda::thread_scope Scope, typename Allocator&gt;
template &lt;typename KeyEqual&gt;
__device__ static_map&lt;Key, Value, Scope, Allocator&gt;::device_mutable_view::insert_result
static_map&lt;Key, Value, Scope, Allocator&gt;::device_mutable_view::back_to_back_cas(
  iterator current_slot,
  value_type const&amp; insert_pair,
  KeyEqual key_equal,
  Key expected_key) noexcept
{
  // back_to_back_cas(current_slot, insert_pair, key_equal, existing_key)
  using cuda::std::memory_order_relaxed;

  auto expected_value = this-&gt;get_empty_value_sentinel();

  // Back-to-back CAS for 8B/8B key/value pairs
  auto&amp; slot_key   = current_slot-&gt;first;
  auto&amp; slot_value = current_slot-&gt;second;

  bool key_success =
    slot_key.compare_exchange_strong(expected_key, insert_pair.first, memory_order_relaxed);
  bool value_success =
    slot_value.compare_exchange_strong(expected_value, insert_pair.second, memory_order_relaxed);

  if (key_success) {
    while (not value_success) {
      value_success =
        slot_value.compare_exchange_strong(expected_value = this-&gt;get_empty_value_sentinel(),
                                           insert_pair.second,
                                           memory_order_relaxed);
    }
    return insert_result::SUCCESS;
  } else if (value_success) {
    slot_value.store(this-&gt;get_empty_value_sentinel(), memory_order_relaxed);
  }

  // our key was already present in the slot, so our key is a duplicate
  if (key_equal(insert_pair.first, expected_key)) { return insert_result::DUPLICATE; }

  return insert_result::CONTINUE;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,8);function y(h,g){const n=s("font");return t(),a("div",null,[m,o,e("ul",null,[b,e("li",null,[l(n,{color:"green"},{default:d(()=>[r("TODO:")]),_:1}),p])]),_])}const B=i(u,[["render",y],["__file","cucollection_blog.html.vue"]]),z=JSON.parse(`{"path":"/blogs/cucollection_blog.html","title":"cuCollections性能测试","lang":"zh-CN","frontmatter":{"date":"2022-11-30T00:00:00.000Z","tag":["CUDA","Hash"],"category":["高性能"],"description":"cuCollections性能测试 0. 测试目标 cucollection性能分析（测试在负载因子为0.8/0.9时的性能，以及空载时的插入性能，吞吐量，带宽 etc）key为64bit int，数据使用均匀分布 [x] 阅读benchmark代码，修改benchmark中的参数，测试不同负载因子下的性能( dynamic, static) [x] ...","head":[["meta",{"property":"og:url","content":"https://bradzhone.github.io/blogs/cucollection_blog.html"}],["meta",{"property":"og:site_name","content":"BradZhone's Blog"}],["meta",{"property":"og:title","content":"cuCollections性能测试"}],["meta",{"property":"og:description","content":"cuCollections性能测试 0. 测试目标 cucollection性能分析（测试在负载因子为0.8/0.9时的性能，以及空载时的插入性能，吞吐量，带宽 etc）key为64bit int，数据使用均匀分布 [x] 阅读benchmark代码，修改benchmark中的参数，测试不同负载因子下的性能( dynamic, static) [x] ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BradZhone"}],["meta",{"property":"article:tag","content":"CUDA"}],["meta",{"property":"article:tag","content":"Hash"}],["meta",{"property":"article:published_time","content":"2022-11-30T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cuCollections性能测试\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-30T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BradZhone\\",\\"url\\":\\"https://github.com/BradZhone\\"}]}"]]},"headers":[{"level":2,"title":"0. 测试目标","slug":"_0-测试目标","link":"#_0-测试目标","children":[]},{"level":2,"title":"1. 环境配置","slug":"_1-环境配置","link":"#_1-环境配置","children":[]},{"level":2,"title":"2. Benchmark","slug":"_2-benchmark","link":"#_2-benchmark","children":[]},{"level":2,"title":"3. 测试结果","slug":"_3-测试结果","link":"#_3-测试结果","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":14.38,"words":4315},"filePathRelative":"blogs/cucollection_blog.md","localizedDate":"2022年11月30日","excerpt":"\\n<h2>0. 测试目标</h2>\\n<ul>\\n<li>cucollection性能分析（测试在负载因子为0.8/0.9时的性能，以及空载时的插入性能，吞吐量，带宽 etc）key为64bit int，数据使用均匀分布</li>\\n<li>\\n<ul>\\n<li>[x] 阅读benchmark代码，修改benchmark中的参数，测试不同负载因子下的性能( dynamic, static)</li>\\n<li>[x] 弄清example中的示例，基本用法，可参考test</li>\\n<li>[x] 根据所需测试性能参数修改benchmark测试</li>\\n</ul>\\n</li>\\n</ul>\\n<h2>1. 环境配置</h2>","autoDesc":true}`);export{B as comp,z as data};
